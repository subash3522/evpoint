import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCar, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-logo">Logo</div>
          <div className="links">
            <ul>
              <li>
                <Link to="/why-us">Why us</Link>
              </li>
              <li>
                <Link to="/what-we-do">What we do</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
              <li className="dropdown" onClick={toggleDropdown}>
                <span>
                  Features <FontAwesomeIcon icon={faArrowDown} />
                </span>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/appointment">Appointment</Link>
                    </li>
                    <li>
                      <Link to="/reservation">Reservation</Link>
                    </li>
                    <li>
                      <Link to="/payment">Payment</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="options">
            <div className="search">
              <FontAwesomeIcon icon={faSearch} />
              Search
            </div>
            <div className="book">
              <FontAwesomeIcon icon={faCar} />
              <Link to="/book-parking">Book Parking</Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
