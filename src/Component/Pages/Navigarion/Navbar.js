import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSomeIcon } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
    <header>
        <nav className="navbar">
            <div className="nav-logo">Logo</div>
            <div className="ourservices"><a href="#" className='nav-a-big'>Our Services</a></div>
            <div className="links">
                <ul>
                    <li>
                        <a href="#">Why us</a>
                        <a href="#"> What we do</a>
                        <a href="#">Contact us</a>
                    </li>
                </ul>
            </div>
            <div className="options">
                
                <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                    Search now
                </div>
                <div className="book">
                    Book for parking
                </div>
            </div>
        </nav>
    </header>
    </>
  );
}

export default Navbar