import React, { useCallback } from 'react';

import InputCell from './InputCell';
import PredefinedCell from './PredefinedCell';

function Row({ row, index: rowIndex, onCellChange }) {
  const handleChange = useCallback(
    (cellIndex, value) => {
      onCellChange({ value, rowIndex, cellIndex });
    },
    [rowIndex]
  );

  return (
    <div class="row">
      <PredefinedCell data={rowIndex + 1} />
      {row.map((data, cellIndex) => {
        return (
          <InputCell
            key={data.key}
            data={data.value}
            cellIndex={cellIndex}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
}

export default Row;
