// Admin.js
import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white flex flex-col justify-center items-center  p-8 rounded shadow-md max-w-screen-lg h-1/2 w-[500px]">
        <h2 className="text-center text-[50px] font-bold leading-[1.2] md:text-[32px] md:leading-8 mb-20">
          Admin Page
        </h2>

        <div className="mt-4 w-full flex gap-3">
          <Link
            to="/register"
            className="relative flex h-12 w-1/2 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-white hover:bg-[#0000FF]"
          >
            Register
          </Link>
          <Link
            to={"/login"}
            className="relative flex h-12 w-1/2 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-white hover:bg-[#0000FF]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
