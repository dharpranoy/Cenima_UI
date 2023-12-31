import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Navbar = (props) => {

  let [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky" style={{ backgroundColor: '#222021', position: 'sticky', zIndex: '100', top: '0' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://i.pinimg.com/originals/72/e5/29/72e529e4e09f45496c470a0b47110398.jpg"
            alt=""
            width="60"
            height="60"
            style={{ borderRadius: "60%", objectFit: 'cover' }}
          />
        </a>
        <button
          onClick={handleToggle}
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
        <div className={`${isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" style={{ color: '#FFA500' }} aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" style={{ color: '#FFA500' }} aria-current="page">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`${props.isLoggedIn ? '/profile' : '/login'}`} className="nav-link active" style={{ color: '#FFA500' }} aria-current="page">
                Profile
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
            <button
              className="btn btn-outline"
              type="submit"
              style={{ backgroundColor: '#FFA500', borderColor: '#FFA500' }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
