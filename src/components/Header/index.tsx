import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
  return(
    <header className="header">
      <nav className="headerMenu">
        <Link to ='/'>  Home </Link>
        <Link to ='/events'> events  </Link>
        <Link to ='/contributors'> contributors </Link>
        <Link to ='/contact-us'>  Contact Us </Link>
      </nav>
      <div> Ajays </div>
    </header>
   )
  }

export default Header;
