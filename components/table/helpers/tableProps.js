function filterData(data, visibleRows, currentIndex) {
  var filteredData = data.slice(currentIndex, currentIndex + visibleRows);
  return filteredData;
}

export function getTableProps(data, visibleRows, rowHeight, currentIndex) {
  return {
    visibleRows: filterData(data, visibleRows, currentIndex),
    tableHeight: data.length * rowHeight,
    containerHeight: visibleRows * rowHeight + rowHeight,
    paddingTop: rowHeight * currentIndex,
  };
}
