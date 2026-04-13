// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/mainPages/Home.jsx";
import FetchOld from "../pages/mainPages/FetchOld.jsx";
import FetchRQ from "../pages/mainPages/FetchRQ.jsx";
import Details from "../pages/mainPages/Details.jsx";
import Infinite from "../pages/mainPages/Infinite.jsx";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "trad", element: <FetchOld /> },
        { path: "rq", element: <FetchRQ /> },
        { path: "rq/:id", element: <Details /> },
        { path: "infinite", element: <Infinite /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

export default Router;
