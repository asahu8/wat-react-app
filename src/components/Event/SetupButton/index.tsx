import React from 'react';
import { Link } from 'react-router-dom';

const SetupButton =  () => {
  return (
    <Link to="/event-setup">
      <div className='events__wrapper'>
        <button className="events__create"> + Create new event </button>
      </div>
    </Link>
  )
}

export default SetupButton;