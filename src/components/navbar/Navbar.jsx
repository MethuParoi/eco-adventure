import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

function Navbar() {
  const [showUserName, setShowUserName] = useState(false);
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    if (user) {
      try {
        await logoutUser();
        toast.success("User logged out successfully");
        navigate("/"); // Navigate after successful logout
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    }
  };

  return (
    <div className="navbar bg-secondary pr-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-secondary rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <li>
              <button
                onClick={() => {
                  user ? handleLogout : null;
                  user ? navigate("/") : navigate("/login");
                }}
                className="text-neutral"
              >
                {user ? "Logout" : "Login"}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/register")}
                className="text-neutral"
              >
                {user ? user.displayName || user.email : "Register"}
              </button>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-2xl text-neutral">
          Eco-Adventure Experiences
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button className="text-neutral">Home</button>
          </li>
          <li>
            <button className="text-neutral">Update Profile</button>
          </li>
          <li>
            <button className="text-neutral">User Profile</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end relative">
        <button
          onClick={() => {
            user ? handleLogout() : null;
            user ? navigate("/") : navigate("/login");
          }}
          className="text-neutral hover:text-gray-800 btn bg-primary border-transparent hover:bg-accent "
        >
          {user ? "Logout" : "Login"}
        </button>
        {user && (
          <div
            onMouseEnter={() => setShowUserName(true)}
            onMouseLeave={() => setShowUserName(false)}
            className="pr-6 pl-5 cursor-pointer"
          >
            <img
              src={user.photoURL}
              alt="Avatar"
              className="w-14 rounded-full border-2 border-neutral"
            />
          </div>
        )}
        {showUserName && (
          <div className="text-neutral font-medium text-xl btn bg-primary border-transparent hover:bg-accent absolute top-1 right-24">
            {user.displayName}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
