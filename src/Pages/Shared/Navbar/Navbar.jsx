import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

// Home          About          Services          Blog          Contact

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/service">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <NavLink to="/bookings">My bookings</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 h-36">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-error">Appointment</button>
      </div>

      {user?.email ? (
        <>
          <button onClick={handleLogout} className="btn  btn-primary">
            Log out
          </button>
          {user && <span>{user.email}</span>}
        </>
      ) : (
        <>
          <Link to="/login">
            <button className=" btn btn-primary">Sign in</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
