import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import { EventListToggleContext } from '../../context/EventListToggleContext';

const Header = () => {
  const {toggleEventView} = useContext(EventListToggleContext);

  const eventClicked = () => {
   toggleEventView(false);
  }

  return(
    <header className="header">
      <nav className="headerMenu">
        <Link to ='/'>  Home </Link>
        <Link to ='/events' onClick={eventClicked}> events  </Link>
        <Link to ='/contributors'> contributors </Link>
        <Link to ='/contact-us'>  Contact Us </Link>
      </nav>
      <div> Ajays </div>
    </header>
   )
  }


export default Header;
