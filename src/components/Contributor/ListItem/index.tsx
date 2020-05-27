import React, {useState} from 'react'
import './style.css';
import { Link } from 'react-router-dom';


const ContributorItem = (props: any) => {
  const {contributor} = props;
  console.log(contributor);
  return(
    <div className='contributor-card'>
      <div className='image'>
        <img src={require('../../../assets/placeholder.png')} />
      </div>
      <div className='content'>
        <a>{contributor.firstName + ' ' + contributor.lastName}</a>
        <h4>{contributor.companyName}</h4>
        <h5>{contributor.location}</h5>
      </div>

    </div>
   )
  }

export default ContributorItem;