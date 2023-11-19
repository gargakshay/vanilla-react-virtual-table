import React from 'react';

function ColumnHeaders({ count }) {
  const row = Array(count).fill();
  return (
    <div className="row column-headers">
      <div className="predefined-cell header"></div>
      {row.map((_, index) => {
        const headerLabel = String.fromCharCode(65 + index);
        return <input className="cell header" value={headerLabel} disabled />;
      })}
    </div>
  );
}

export default ColumnHeaders;
