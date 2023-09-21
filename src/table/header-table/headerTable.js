import React from 'react';
import { header } from '../constants';

const HeaderTable = () => {
  return (
    <div className="header-in-table">
      {header.map((el) => {
        return <div key={el}>{el}</div>;
      })}
    </div>
  );
};

export default HeaderTable;
