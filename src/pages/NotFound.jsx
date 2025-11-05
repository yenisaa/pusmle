import React from "react";
import { HiBackward, HiMagnifyingGlassCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mb-12 max-w-7xl mt-20">
        <div className="flex items-center justify-center">
            <img src="/logo.png" alt="logo" className="w-60" />
        </div>
      <div className="flex  items-center justify-center">
          <h1 className="text-9xl text-yellow-500 b">
            404
          </h1><span className="flex text-5xl text-yellow-500"> <HiMagnifyingGlassCircle /> </span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Sorry, this page cannot be found{" "}
      </h2>
      <p className="text-gray-600 text-lg">Click the button to go back </p>
      <Link to="/" className="flex  flex-col items-center justify-center gap-5">
        <button className="bg-blue-600 text-white p-4 text-lg rounded-full flex px-8 items-center justify-center gap-4 mt-7">
          <HiBackward /> Go home{" "}
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
