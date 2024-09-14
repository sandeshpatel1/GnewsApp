import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ articles, onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar">
      <div className="nav">
        <Link className="logo" to="/">
          TODAY NEWS
        </Link>
        <div className="nav-items">
          <div className="search">
            <input
             onSubmit={handleSubmit}
              type="search"
              className="search-box"
              placeholder="search news here"
              value={searchTerm}
          onChange={handleSearchChange}
            />
            <button className="search-btn">Search</button>
          </div>
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <ul className={`links-container ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/business">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/health">
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/science">
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sports">
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};


Navbar.propTypes = {
  articles: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
