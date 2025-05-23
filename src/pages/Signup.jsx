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
    <div className="min-h-screen flex justify-center items-center mt-10">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" className="input w-full" required />
          <input type="email" name="email" placeholder="Email" className="input w-full" required />
          <input type="text" name="photoURL" placeholder="Photo URL" className="input w-full" />
          <input type="password" name="password" placeholder="Password" className="input w-full" required />
          <button type="submit" className="btn w-full bg-green-600 text-white">Register</button>
        </form>

        <button onClick={handleGoogleLogin} className="btn w-full mt-4 bg-red-500 text-white">Register with Google</button>

        <p className="text-sm mt-4 text-center">
          <span className="text-red-500"><span className="text-red-500">New user?</span></span> <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
