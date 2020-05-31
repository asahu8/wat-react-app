import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './style.scss'
import logo from '../../assets/wat-logo.jpeg';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { isUserLoggedIn, signOut } = useContext(AuthContext);
  const history = useHistory();

  const logOutUser = () => {
   //TODO: call backend to signout as well
    signOut();
    history.push("/login");
  }

  return(
    <header className="header">
      <img src={logo} alt='logo'/>
      <nav className="headerMenu">
        <div className='page-navs'>
          <div>
            {isUserLoggedIn() &&  <Link to ='/'>  Home </Link>}
            {isUserLoggedIn() && <Link to ='/events'> events  </Link>}
            {isUserLoggedIn() &&  <Link to ='/contributors'> contributors </Link>}
            {isUserLoggedIn() &&  <Link to ='/contact-us'>  Contact Us </Link>}
          </div>
          <div>
            {isUserLoggedIn() &&  <a onClick ={() => logOutUser()}>  Sign out </a>}
          </div>
        </div>
      </nav>
    </header>
   )
  }

export default Header;
