import React from 'react';

const FriendCell = ({ friend_email, friend_role }) => {
  return (
    <div className="column-container">
      <a className="bold-text email" href={`mailto:${friend_email}`}>
        <span>{friend_email}</span>
      </a>
      <span className="regular-text">{friend_role}</span>
    </div>
  );
};

export default FriendCell;
