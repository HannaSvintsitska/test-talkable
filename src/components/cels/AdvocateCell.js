import React from 'react';

const AdvocateCell = ({ email, role }) => {
  return (
    <div className="column-container">
      <a className="bold-text email" href={`mailto:${email}`}>
        <span>{email}</span>
      </a>
      <span className="regular-text">{role}</span>
    </div>
  );
};

export default AdvocateCell;
