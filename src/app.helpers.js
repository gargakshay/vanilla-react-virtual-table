export function getData(rowsCount, columnsCount) {
  const rows = [];
  for (let i = 0; i < rowsCount; i++) {
    const columns = [];
    for (let j = 0; j < columnsCount; j++) {
      columns[j] = {
        value: undefined,
        key: `${i}${j}${Math.random()}`,
      };
    }

    rows[i] = {
      key: `${i}${Math.random()}`,
      value: columns,
    };
  }

  return rows;
}

export function getGeneratedData() {
  return getData(500, 26);
}
