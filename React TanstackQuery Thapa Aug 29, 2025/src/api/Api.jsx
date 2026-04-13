import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// export const fetchPosts = async () => {
//   const response = await api.get("/posts");
//   return response.data; // ✅ Only return the array
// };

export const fetchPosts = async (pageNumber) => {
  const response = await api.get(`/posts?_start=${pageNumber * 3}&_limit=3`);
  return response.data;
};

export const fetchIndPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => {
  return api.delete(`posts/${id}`);
};

export const updatePost = async ({ id, ...data }) => {
  const response = await api.put(`/posts/${id}`, data);
  return response.data;
};

// infinete scrolling

// api/Api.js

export const fetchUsers = async ({ pageParam = 1 }) => {
  try {
    const res = await axios.get(
      // `https://api.github.com/users?per_page=10&page=${pageParam}`
      // `https://jsonplaceholder.typicode.com/todos?per_page=10&page=${pageParam}`
      // `https://jsonplaceholder.typicode.com/todos?page=${pageParam}`
    );

    // Check if API returned an error message (like rate limit exceeded)
    if (res.data && res.data.message) {
      throw new Error(res.data.message);
    }

    // Return users array
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    throw error; // Let React Query handle it
  }
};
