import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <div>
        <Link
          to={"/admin"}
          className="relative flex h-12 px-3 py-2 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-white hover:bg-[#0000FF]"
        >
          Go To Admin Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
