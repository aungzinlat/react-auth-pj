// Sidebar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const nav = useNavigate();
  const handleLogOut = () => {
    nav("/login");
  };

  return (
    <nav className="bg-gray-800 h-full col-span-4 flex flex-col justify-between text-white w-64 p-4">
      <ul>
        <li className="mb-4">
          <Link to="/dashboard/profile" className="block p-2 hover:bg-gray-700">
            Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/dashboard/blog" className="block p-2 hover:bg-gray-700">
            Blog
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/dashboard/user" className="block p-2 hover:bg-gray-700">
            User
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/dashboard/inventory"
            className="block p-2 hover:bg-gray-700"
          >
            Inventory
          </Link>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
      <button
        type="button"
        onClick={handleLogOut}
        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
      >
        Log Out
      </button>
    </nav>
  );
};

export default Sidebar;
