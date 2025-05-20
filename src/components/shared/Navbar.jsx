import { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [theme, setTheme] = useState("light");

  // // initial theme hisebe theme load from localStorage  default theme hisebeo
  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme") || "light";
  //   setTheme(storedTheme);
  //   document.documentElement.classList.toggle("dark", storedTheme === "dark");
  // }, []);

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   document.documentElement.classList.toggle("dark", newTheme === "dark");
  //   localStorage.setItem("theme", newTheme);
  // };

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((error) => console.error(error));
  };

  const navLinkStyle = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-white";

  return (
    <div className="fixed top-0 left-0 w-full z-50 py-4 bg-red-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-blue-700 dark:text-white">
          FreelanceTasker
        </Link>

        <div className="space-x-6 flex items-center">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/browse-tasks" className={navLinkStyle}>Browse Tasks</NavLink>

          
              <NavLink to="/add-task" className={navLinkStyle}>Add Task</NavLink>
              <NavLink to="/my-posted-tasks" className={navLinkStyle}>My Posted Tasks</NavLink>
            
          {/* {user && (
            <>
              <NavLink to="/add-task" className={navLinkStyle}>Add Task</NavLink>
              <NavLink to="/my-posted-tasks" className={navLinkStyle}>My Posted Tasks</NavLink>
            </>
          )} */}

          {!user ? (
            <>
              <NavLink to="/login" className={navLinkStyle}>Login</NavLink>
              <NavLink to="/signup" className={navLinkStyle}>Signup</NavLink>
            </>
          ) : (
            <div className="flex items-center gap-2">
              {user.photoURL && (
                <img src={user.photoURL} alt="profile" className="w-8 h-8 rounded-full" />
              )}
              <span className="text-sm dark:text-white">{user.displayName || "User"}</span>
              <button onClick={handleLogout} className="text-red-500 hover:underline text-sm">
                Logout
              </button>
            </div>
          )}

          <button
            // onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-white hover:text-blue-500 transition"
            title="Toggle Theme"
          >
            {/* {theme === "light" ? <FaMoon /> : <FaSun />} */}
            <FaMoon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
