import React, { useState } from "react";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, fetchPosts, updatePost } from "../../api/Api";
import { NavLink } from "react-router-dom";

function FetchRQ() {
  const [pageNumber, setPageNumber] = useState(0);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching, // 👈 this is the key
  } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    // keepPreviousData: true,
    placeholderData: keepPreviousData,
  });

  const queryClient = useQueryClient();

  // Mututation Function to delete
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNumber], (element) => {
        // konse Query ki cache me h
        return element?.filter((post) => post.id != id);
      }); // konse query key k data ko access krna h
    },
  });

  // For Update
  const updateMutation = useMutation({
    mutationFn: (updatedPost) => updatePost(updatedPost), // updatedPost should include id and updated data
    onSuccess: (apiData, updatedPost) => {
      queryClient.setQueryData(["posts", pageNumber], (element) => {
        // konse Query ki cache me h
        return element?.map((post) =>
          post.id === updatedPost.id ? apiData : post
        );
      }); // konse query key k data ko access krna h
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <p>Loading initial data...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-40">
        <p>Something went wrong</p>
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts (FetchRQ)</h2>
      <ul className="space-y-2">
        {data.map((post) => (
          <li key={post.id} className="p-4 border rounded shadow">
            <NavLink to={`/rq/${post.id}`}>
              <h3 className="font-semibold">{post.id}</h3>
              <h3 className="font-semibold">{post.title}</h3>
              <p>{post.body}</p>
            </NavLink>
            <button
              onClick={() => deleteMutation.mutate(post.id)}
              className="bg-red-500 cursor-copy text-white px-2 rounded-xl p-1 "
            >
              Delete
            </button>

            <div
              onClick={() =>
                updateMutation.mutate({
                  id: post.id,
                  title: "Updated Title",
                  body: "Updated Body Content",
                })
              }
              className="cursor-pointer mt-2 p-2 bg-yellow-200 text-sm rounded"
            >
              🔄 Click to Update
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-4 mt-4">
        <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 0))}
          disabled={pageNumber === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <p className="font-semibold">Page: {pageNumber + 1}</p>
        <button
          onClick={() => setPageNumber((prev) => prev + 1)}
          disabled={data.length < 3}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>

      {/* Optional loading indicator */}
      {/* {isFetching && (
        <p className="mt-2 text-sm text-gray-500 italic">
          Fetching new page...
        </p>
      )} */}
    </div>
  );
}

export default FetchRQ;
