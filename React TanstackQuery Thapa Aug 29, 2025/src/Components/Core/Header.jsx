// src/Components/Core/Header.jsx

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="  py-4 px-6 flex justify-between items-center">
      <h1 className="text-lg font-semibold">ThapaReactQuery</h1>

      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " border-b-2 border-white pb-1" : " hover:text-gray-300"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/trad"
          className={({ isActive }) =>
            isActive ? " border-b-2 border-white pb-1" : " hover:text-gray-300"
          }
        >
          FETCHOLD
        </NavLink>
        <NavLink
          to="/rq"
          className={({ isActive }) =>
            isActive ? " border-b-2 border-white pb-1" : " hover:text-gray-300"
          }
        >
          FETCHRQ
        </NavLink>
        <NavLink
          to="/infinite"
          className={({ isActive }) =>
            isActive ? " border-b-2 border-white pb-1" : " hover:text-gray-300"
          }
        >
          Infinite
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
