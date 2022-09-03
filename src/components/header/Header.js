import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const navbarData = [
  {
    id: "01",
    title: "Home",
    link: "/",
  },
  {
    id: "02",
    title: "About",
    link: "/about",
  },
  {
    id: "03",
    title: "Appointment",
    link: "/appointment",
  },
  {
    id: "04",
    title: "Reviews",
    link: "/reviews",
  },
  {
    id: "05",
    title: "ContactUs",
    link: "/contact-us",
  },
];

let activeStyle = {
  color: "#F6F7F9",
  backgroundColor: "#3A4256",
  borderRadius: "10px",
  padding: "10px 20px",
};

const Header = () => {
  const { users, handleSignOut } = useAuth();
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Doctors Portal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto my-3 mb-lg-0">
              {navbarData.map((item) => (
                <li className="nav-item mx-2" key={item.id}>
                  <NavLink
                    className="nav-link"
                    to={item.link}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              {users?.email ? (
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              ) : (
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
