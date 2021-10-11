import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${
        props.darkMode === "light" ? "light" : "dark"
      } shadow`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={props.title.url}>
          {props.title.name}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to={props.about.url}
              >
                {props.about.name}
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* Dark mode button */}
            <label className={`form-check-label mx-2 text-${props.darkMode==='light'?'dark':'light'}`}>
              Light
            </label>
          <div className="form-check form-switch">
            <input
            onClick={props.toggleDarkMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
            />
            <label className={`form-check-label mx-2 text-${props.darkMode==='light'?'dark':'light'}`}>
              Dark
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Proptypes is just to validate the props that are passed to the component
Navbar.propTypes = {
  title: PropTypes.object.isRequired,
  about: PropTypes.object.isRequired,
};

// set default props
Navbar.defaultProps = {
  title: { url: "/", name: "Title" },
  about: { url: "/about", name: "About" },
  home: { url: "/", name: "Home" },
};
