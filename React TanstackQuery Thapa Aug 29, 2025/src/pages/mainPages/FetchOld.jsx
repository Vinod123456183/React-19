import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api/Api";

function FetchOld() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // optional loading state
  const [error, setError] = useState(null);
  const getPostData = async () => {
    try {
      const data = await fetchPosts(); // returns posts array directly
      setPosts(data);
    } catch (error) {
      setError(error.message);
      console.error("API Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts (FetchOld)</h2>
      <ul className="space-y-2">
        {posts?.map(
          (
            post //optional chaining
          ) => (
            <li key={post.id} className="p-4 border rounded shadow">
              <h3 className="font-semibold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default FetchOld;
