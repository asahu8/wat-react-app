import React from 'react'
import './style.css';

const Footer = (props: any) => {
  const { content } = props;
  return(
    <div className="footer"> { content } </div>
   )
}
export default Footer;
