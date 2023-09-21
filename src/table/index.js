import React from 'react';
import './table.css';
import { rows } from './constants';
import Row from '../components/row';
import HeaderTable from './header-table/headerTable';

const Table = () => {
  return (
    <div className="main-container-table">
      <div className="header-table">
        <span>Refferals - 345</span>
      </div>
      <div className="table-table">
        <HeaderTable />
        <hr className="hr-table" />
        <div>
          {rows.map((el, index) => {
            return (
              <React.Fragment key={index}>
                <Row content={el} />
                <hr className="hr-table" />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
