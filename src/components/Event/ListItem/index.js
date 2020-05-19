import React from 'react'
import './style.scss';

const EventListItem = (props) => {
  const { name, date, createdBy, commentsCount} = props.item;
  return(
    <tr>
      <td className="list-item">{name}</td>
      <td className="list-item">{date}</td>
      <td className="list-item">{createdBy}</td>
      <td className="list-item">{commentsCount}</td>
    </tr>
   );
}

export default EventListItem;