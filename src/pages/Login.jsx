import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      Swal.fire("Success!", "Logged in successfully!", "success");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
      Swal.fire("Error!", err.message, "error");
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Success!", "Logged in with Google!", "success");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire("Error!", err.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-white dark:text-green-600">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" name="email" placeholder="Email" className="input w-full" required />
          <input type="password" name="password" placeholder="Password" className="input w-full" required />
          <button type="submit" className="btn w-full bg-blue-600 text-white">Login</button>
        </form>

        <button onClick={handleGoogleLogin} className="btn w-full mt-4 bg-red-500 text-white">Login with Google</button>

        <p className="text-sm mt-4 text-center">
          <span className="text-red-500">New user?</span> <Link to="/signup" className="text-blue-500 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
