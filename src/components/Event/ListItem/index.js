import React from 'react'
import './style.scss';

const EventListItem = (props) => {
  const { name, date, createdBy, commentsCount} = props.item;
  return(
    <tr>
      <td class="list-item">{name}</td>
      <td class="list-item">{date}</td>
      <td class="list-item">{createdBy}</td>
      <td class="list-item">{commentsCount}</td>
    </tr>
   );
}

export default EventListItem;