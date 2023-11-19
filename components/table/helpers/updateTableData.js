export function updateTableData({ tableData, value, rowIndex, cellIndex }) {
  const updatedTableData = [...tableData];
  updatedTableData[rowIndex] = { ...updatedTableData[rowIndex] };

  updatedTableData[rowIndex]['value'][cellIndex] = {
    ...updatedTableData[rowIndex]['value'][cellIndex],
    value,
  };
  return updatedTableData;
}
