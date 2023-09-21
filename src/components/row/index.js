import React from 'react';
import './row.css';
import RefferalEventCell from '../cels/RefferalEventCell';
import AdvocateCell from '../cels/AdvocateCell';
import FriendCell from '../cels/FriendCell';
import RefferalStatusCell from '../cels/RefferalStatusCell';

const Row = ({ content }) => {
  return (
    <div className="row-container">
      <RefferalEventCell
        event={content.event}
        date={content.date}
        price={content.price}
      />
      <AdvocateCell email={content.email} role={content.role} />
      <FriendCell
        friend_email={content.friend_email}
        friend_role={content.friend_role}
      />
      <RefferalStatusCell
        status={content.status}
        status_detail={content.status_detail}
      />
    </div>
  );
};

export default Row;
