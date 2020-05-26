import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import logo from '../../assets/wat-logo.jpeg';

const Header = () => {
  return(
    <header className="header">
      <img src={logo} alt='logo'/>
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
