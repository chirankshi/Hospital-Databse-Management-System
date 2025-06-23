import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(!!userId); // True if userId exists
  }, []);

  const toggleNavbar = () => {
    document.querySelector('#menubar')?.classList.toggle('fa-times');
    document.querySelector('.navbar')?.classList.toggle('active');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setShowDropdown(false);
    alert('Logged out successfully');
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <>
      <header className="header">
        <img src={logo} id="logo" alt="logo" />
        
        <nav className="navbar">
          <Link to="/#Home">Home</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="navbar-right">
          <Link to="/Appointement" className="nav-link">Book Appointment</Link>
          
          {/* <Link to="/Contact" className="nav-icon phone-icon" title="Contact">
            <i className="fas fa-phone-volume"></i>
          </Link> */}

          {/* Login Circle Icon */}
          <div className="nav-icon login-circle" onClick={toggleDropdown} title="Account">
            <i className="fas fa-user"></i>
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="dropdown-menu">
              {!isLoggedIn ? (
                <>
                  <Link to="/login" onClick={() => setShowDropdown(false)}>Login</Link>
                  <Link to="/signup" onClick={() => setShowDropdown(false)}>Create Account</Link>
                </>
              ) : (
                <button onClick={handleLogout}>Logout</button>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
