import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar({title}) {
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
        <i className="fa fa-users"></i> {title} 
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
              <i className=" fa fa-home"></i> Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
              <i className=" fa fa-pencil"></i> Add User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/github">
              <i className=" fa fa-github"></i> Project Files
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "default Navbar",
};
export default Navbar;
