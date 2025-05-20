import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-600">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mt-4">Oops! Page not found.</p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">The page you're looking for doesn't exist or has been moved.</p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
