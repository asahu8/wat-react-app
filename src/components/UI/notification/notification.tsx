import React, {useState, useEffect} from 'react';
import './style.scss';

const Notification = (props: any) => {
  const {type, message} = props;
  const [showMe, setShowMe] = useState(true);

  useEffect(() => {
    setTimeout(() => { setShowMe(false); }, 5000);
  })

  const headerClass = () => {
    let headerKlass = 'ui message wat-notification';
    headerKlass = type === 'error' ? 'ui message wat-notification error' : headerKlass;
    return showMe ? `${headerKlass} fadeIn` : `${headerKlass} fadeOut`;
  };


  return(
    <div className={headerClass()}>
      <i className="close icon" onClick={() => {setShowMe(false)}}></i>
      <div className="header notification-header"> {type} </div>
      <p> {message}</p>
    </div>
  );
};

export default Notification;
