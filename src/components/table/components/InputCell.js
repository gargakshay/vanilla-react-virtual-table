import React, { useCallback } from 'react';

function InputCell({ data, cellIndex, onChange }) {
  const handleChange = useCallback(
    (event) => {
      const value = event.target.value;
      onChange(cellIndex, value);
    },
    [cellIndex]
  );

  return (
    <input type="text" className="cell" value={data} onChange={handleChange} />
  );
}

export default InputCell;
