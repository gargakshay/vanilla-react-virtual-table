import React, { useCallback, useEffect } from 'react';

import Row from './components/Row';
import ColumnHeaders from './components/ColumnHeaders';

import useScrollPosition from '../hooks/useScrollPosition';
import useTableProps from './useTableProps';

import { updateTableData } from './helpers/updateTableData';

import './table.css'; // Recommend to use <filename>.module.scss

function Table({ data: tableData, onUpdateData, onLoadMoreData }) {
  const [bodyRef, scrollPositionOffset, isScrollEnd] = useScrollPosition();
  const { containerStyles, bodyStyles, visibleRows, scrollPosition } =
    useTableProps({ tableData, scrollPositionOffset });

  const handleCellChange = useCallback(
    ({ value, rowIndex, cellIndex }) => {
      const updatedTableData = updateTableData({
        tableData,
        value,
        rowIndex,
        cellIndex,
      });
      onUpdateData(updatedTableData);
    },
    [tableData]
  );

  useEffect(() => {
    if (isScrollEnd) {
      onLoadMoreData();
    }
  }, [isScrollEnd]);

  return (
    <div>
      <div style={containerStyles} className="container" ref={bodyRef}>
        <ColumnHeaders count={visibleRows[0].value.length} />
        <div style={bodyStyles}>
          {visibleRows.map((row, index) => (
            <Row
              key={row.key}
              row={row.value}
              index={index + scrollPosition}
              onCellChange={handleCellChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
