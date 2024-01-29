import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { api } from "../../service/baseurl";

const DashboardPage = () => {
  const nav = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const user = api.get("users");
      if (user) {
        setIsAuthenticated(true);
      } else {
        nav("/login");
      }
    };

    checkAuthentication();
  }, [nav]);

  return isAuthenticated ? (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </div>
        </header>

        <main className=" grid grid-cols-10 overflow-x-hidden h-screen overflow-y-auto bg-gray-200">
          <div className=" col-span-3">
            <Sidebar />
          </div>
          <div className=" col-span-7">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  ) : null;
};

export default DashboardPage;
