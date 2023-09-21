import React from 'react';

const RefferalEventCell = ({ event, date, price }) => {
  return (
    <div className="column-container">
      <span className="bold-text">{event}</span>
      <span className="date">{date}</span>
      <span className="price">{price}</span>
    </div>
  );
};

export default RefferalEventCell;
