// infinite scrolling when api dont have pagintaion
import React, { useRef, useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const USERS_PER_PAGE = 10;

const fetchUsers = async ({ pageParam = 1 }) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  const allUsers = res.data;

  const start = (pageParam - 1) * USERS_PER_PAGE;
  const end = start + USERS_PER_PAGE;
  const pageData = allUsers.slice(start, end);

  return {
    data: pageData,
    total: allUsers.length,
  };
};

function Infinite() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      const loadedUsers = allPages.reduce(
        (acc, page) => acc + page.data.length,
        0
      );
      return loadedUsers < lastPage.total ? allPages.length + 1 : undefined;
    },
  });

  const observerRef = useRef();
  const [showLoading, setShowLoading] = useState(false);

  // Show "Loading more..." for exactly 2 seconds whenever isFetchingNextPage becomes true
  useEffect(() => {
    let timeoutId;

    if (isFetchingNextPage) {
      setShowLoading(true);
      timeoutId = setTimeout(() => {
        setShowLoading(false);
      }, 2000);
    } else {
      setShowLoading(false);
      clearTimeout(timeoutId);
    }

    return () => clearTimeout(timeoutId);
  }, [isFetchingNextPage]);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Infinite Users</h2>

      <ul className="space-y-2">
        {data.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.data.map((user) => (
              <li key={user.id} className="border p-2 rounded">
                <p>ID: {user.id}</p>
                <p>Title: {user.title}</p>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <div ref={observerRef} className="h-10" />

      {showLoading && <p>Loading more...</p>}
      {!hasNextPage && <p className="text-gray-500 mt-4">No more users</p>}
    </div>
  );
}

export default Infinite;

/* When Api have perpage feature */
//  infite scrool without load more button

// import { useInfiniteQuery } from "@tanstack/react-query";
// import React from "react";
// import { fetchUsers } from "../../api/Api";

// function Infinite() {
//   const {
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetchingNextPage,
//     isLoading,
//     isError,
//     error,
//   } = useInfiniteQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers,
//     getNextPageParam: (lastPage, allPages) => {
//       // lastPage is the latest result, we assume it's an array
//       return lastPage.length === 10 ? allPages.length + 1 : undefined;
//     },
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error: {error.message}</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Infinite Users</h2>

//       <ul className="space-y-2">
//         {data.pages.map((page, i) => (
//           <React.Fragment key={i}>
//             {page.map((user) => (
//               <li key={user.id} className="border p-2 rounded">
//                 <p>ID: {user.id}</p>
//                 <p>Name: {user.name}</p>
//               </li>
//             ))}
//           </React.Fragment>
//         ))}
//       </ul>

//       <div className="mt-4">
//         <button
//           onClick={() => fetchNextPage()}
//           disabled={!hasNextPage || isFetchingNextPage}
//           className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//         >
//           {isFetchingNextPage
//             ? "Loading more..."
//             : hasNextPage
//               ? "Load More"
//               : "No More Users"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Infinite;
