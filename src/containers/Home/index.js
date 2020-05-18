import React from 'react';
import './style.css';
import Footer from  '../../components/Footer';


const Home = props => {
  let footerContent = "WAT App 2019. All Rights Reserved";
  return (
  <div>
    <Footer content={footerContent} />
  </div> );
}

export default Home;