import React from 'react';

const RefferalStatusCell = ({ status, status_detail }) => {
  return (
    <div className="column-container">
      <span className="bold-text">{status}</span>
      <span
        className={
          status_detail.includes('Passed') ? 'status-grey' : 'status-red'
        }
      >
        {status_detail}
      </span>
    </div>
  );
};

export default RefferalStatusCell;
