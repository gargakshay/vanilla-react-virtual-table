import { useMemo } from 'react';

import { SCAN_COUNT, VISIBLE_ROWS, ROW_HEIGHT } from './table.constants';

import { getTableProps } from './helpers/tableProps';

export default function useTableProps({ tableData, scrollPositionOffset }) {
  const scrollPosition = Math.floor(scrollPositionOffset / ROW_HEIGHT);

  const { visibleRows, tableHeight, containerHeight, paddingTop } = useMemo(
    () => getTableProps(tableData, VISIBLE_ROWS, ROW_HEIGHT, scrollPosition),
    [tableData, scrollPosition]
  );

  const containerStyles = useMemo(
    () => ({ height: containerHeight }),
    [containerHeight]
  );

  const bodyStyles = useMemo(
    () => ({ height: tableHeight, paddingTop }),
    [tableHeight, paddingTop]
  );

  return { containerStyles, bodyStyles, visibleRows, scrollPosition };
}
