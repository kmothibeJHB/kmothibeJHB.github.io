import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';




const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  window.onscroll = () => closeMobileMenu();
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/" className="logo">
            LOGO
          </Link>
        </div>
        <ul class='.ml-auto' className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/about">About Us</Link>
          </li>
          <li className="option programmes" onClick={closeMobileMenu}>
            <Link to="/#programmes">Programmes <RiArrowDropDownLine/></Link>
            {/* <ul className="dropdown-menu">
              <li><Link to="/">Previous Programmes</Link></li>
              <li><Link to="/">Upcoming Programmes</Link></li>

            </ul> */}
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/news">News</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CgClose className="menu-icon"/>
        ) : (
          <AiOutlineMenu className="menu-icon"/>
        )}
      </div>
    </div>
  );
};

export default NavBar;
