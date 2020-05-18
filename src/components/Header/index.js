import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
// import { EventsContext } from '../../context/EventsContext';
import { EventsContext } from '../../context/EventsContext';
import './style.css'


const Header = (props) => {
  const { showEventsListingToggle,  } = useContext(EventsContext);
  const [ , setshowEvents ] = showEventsListingToggle;

  const eventClicked = () => {
    setshowEvents(false);
  }

  return(
      <header className="header">
        <nav className="headerMenu">
          <Link to ='/'>  Home </Link>
          <Link to ='/events' onClick={eventClicked}> events  </Link>
          <Link to ='/contributors'> contributors </Link>
          <Link to ='/contact-us'>  Contact Us </Link>
        </nav>
        <div>
          Ajays
        </div>
      </header>
   )
  }


export default Header;