import React, { use, useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  
  const { createUser, googleLogin, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Password validation
    if (!/[A-Z]/.test(password)) {
      return Swal.fire("Error!", "Password must contain an uppercase letter", "error");
    }
    if (!/[a-z]/.test(password)) {
      return Swal.fire("Error!", "Password must contain a lowercase letter", "error");
    }
    if (password.length < 6) {
      return Swal.fire("Error!", "Password must be at least 6 characters", "error");
    }

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photoURL);
      Swal.fire("Success!", "Account created successfully!", "success");
      navigate("/");
    } catch (err) {
      setError(err.message);
      Swal.fire("Error!", err.message, "error");
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Success!", "Logged in with Google!", "success");
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Error!", err.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
  <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md lg:mt-2 mt-20">
    <h2 className="text-3xl font-bold mb-6 text-center text-green-600 dark:text-green-400">Register</h2>

    <form onSubmit={handleRegister} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="text"
        name="photoURL"
        placeholder="Photo URL"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
      >
        Register
      </button>
    </form>

    <button
      onClick={handleGoogleLogin}
      className="w-full mt-4 py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition"
    >
      Register with Google
    </button>

    <p className="text-sm mt-4 text-center text-gray-700 dark:text-gray-300">
      New user?{" "}
      <Link to="/login" className="text-blue-600 hover:underline dark:text-blue-400">
        Login
      </Link>
    </p>
  </div>
</div>

  );
};

export default Signup;
