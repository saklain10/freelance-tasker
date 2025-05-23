import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((error) => console.error(error));
  };

  const navLinkStyle = ({ isActive }) =>
    isActive ? "text-blue-500 font-semibold" : "text-gray-700 dark:text-gray-200";

  const commonLinks = (
    <>
      <NavLink to="/" className={navLinkStyle}>Home</NavLink>
      <NavLink to="/browse-tasks" className={navLinkStyle}>Browse Tasks</NavLink>
      {user && (
        <>
          <NavLink to="/add-task" className={navLinkStyle}>Add Task</NavLink>
          <NavLink to="/my-posted-tasks" className={navLinkStyle}>My Tasks</NavLink>
        </>
      )}
      {!user ? (
        <>
          <NavLink to="/login" className={navLinkStyle}>Login</NavLink>
          <NavLink to="/signup" className={navLinkStyle}>Signup</NavLink>
        </>
      ) : (
        <div className="flex items-center gap-3 mt-2 lg:mt-0">
          {user.photoURL && (
            <img src={user.photoURL} alt="profile" className="w-8 h-8 rounded-full border" />
          )}
          <span className="text-sm dark:text-white">{user.displayName || user.email}</span>
          <button
            onClick={handleLogout}
            className="text-red-400 hover:underline text-sm"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
          </svg>
          <span>FreelanceTasker</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {commonLinks}
          <button
            onClick={toggleTheme}
            className="text-xl hover:text-yellow-300 transition"
            title="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-white"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

       {/* Mobile Nav Menu  */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-red-800 px-6 py-4 space-y-3">
          {commonLinks}
          <button
            onClick={toggleTheme}
            className="text-xl text-white hover:text-yellow-300 transition block"
            title="Toggle Theme"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
