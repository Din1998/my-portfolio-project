import React, {useState,} from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function NavBars() {
  const [click, setClick ] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


    const topnav = window.addEventListener("scroll",function(){
      let topNav = document.getElementById("Navbar");
      topNav.classList.toggle("sticky", window.scrollY > 1);
    })



  return (
    <div className="navbar" id="Navbar" onScroll={topnav}>
      <div className="navbar-container">
        <NavLink activeClassName="active" to="/">
          <img className="logo" src='./img/din_logo.png' alt="din-logo"/>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/Home" activeClassName="active-link" className="nav-links" onClick={closeMobileMenu}>
              Home 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" activeClassName="active-link" className="nav-links" onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Portfolio" activeClassName="active-link" className="nav-links" onClick={closeMobileMenu}>
               Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" activeClassName="active-link" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBars;