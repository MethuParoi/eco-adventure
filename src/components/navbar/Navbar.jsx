import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-secondary">
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
                onClick={() => navigate("/login")}
                className="text-neutral"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/register")}
                className="text-neutral"
              >
                Register
              </button>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl text-neutral">Eco-Adventure</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button onClick={() => navigate("/login")} className="">
              Login
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/register")} className="">
              Register
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn mr-2">Update Profile</button>
        <button className="btn">User Profile</button>
      </div>
    </div>
  );
}

export default Navbar;
