// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom"; // Outlet to render child routes
import Footer from "../Components/Core/Footer";
import Header from "../Components/Core/Header";

const MainLayout = () => {
  return (
    <>
      <div className="page-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
