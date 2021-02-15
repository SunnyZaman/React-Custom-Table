// import classes from '*.module.css';
// import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from "./Table.module.scss";

function Table({ columns, items }) {
  // const tableColumns = useMemo(() => columns, [])
  // const data = useMemo(() => items, [])
  console.log(columns, items);
  // const styles = {
  //   customTable: {
  //     // borderCollapse: ,
  //     borderSpacing: 0,
  //     width: '100%',
  //     border: '1px solid #ddd',
  //     '&:td': {
  //       textAlign: 'left !important',
  //       padding: '8px'
  //     },
  //     '&:th': {
  //       textAlign: 'left !important',
  //       padding: '8px'
  //     },
  //     '&: tr:nthChild(even)': {
  //       backgroundColor: '#f2f2f2'
  //     }
  //   }
  // }
  const renderTableHeader = () => {
    return columns.map(column => {
      return <th key={column.key}>{column.name.toUpperCase()}</th>
    })
  }
  const renderTableData = () => {
    return items.map((item, index) => {
      return <tr key={index}>
        {
          columns.map((column, columnIndex) => {
            return <td key={`${index}_${columnIndex}`}>{column.onRender(item)}</td>
          })
        }
      </tr>
    })
  }
  return (
    <div className={styles.tableContainer}>
    <table className={styles.customTable}>
      <tbody>
        <tr>{renderTableHeader()}</tr>
        {renderTableData()}
      </tbody>
    </table>
    </div>
  );
}
export default Table;