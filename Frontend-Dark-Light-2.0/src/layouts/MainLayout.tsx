import { Outlet, Link } from "react-router-dom";
import DarkModeToggle from "../components/reusable-components/DarkModeToggle";

const MainLayout = () => {
  return (
    <div className="min-h-svh bg-primary dark:bg-primary-dark ">
      {/* Header */}
      <DarkModeToggle />
      <p className="dark:text-white">Header Which will comon to all</p>
      <div className="flex justify-center items-center min-h-[80vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
