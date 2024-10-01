import { useState, useMemo } from 'react';

//onClick={ ()=>{ handleClick(row?.original)}}

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowData,
  useReactTable,
} from '@tanstack/react-table';

import { columnsProperties } from './Columns.tsx';
import Filter from './Filter.tsx'; //---------Filter-------//
import { getListService } from '../../../services/getListService.ts';
import { useGetListQuery } from '../../../hooks/useGetListQuery.tsx';
import { useUserStore } from '../../../store/userstore.ts';

declare module '@tanstack/react-table' {
  //allows us to define custom properties for our columns
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'text' | 'range' | 'select';
  }
}
const url = 'http://127.0.0.1:8000/api/flights/get-flights';

export default function TanStackTable() {
  const user = useUserStore((state) => state.user);
  const { payload } = useGetListQuery(
    getListService,
    url,
    ['get-flights'],
    user?.token,
  );
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columns = useMemo<ColumnDef<any, any>[]>(() => columnsProperties, []);

  const table = useReactTable({
    data: payload || [],
    columns,
    filterFns: {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className='overflow-x-auto'>
      <div className='flex items-center gap-2 py-6 px-2'>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <table className='w-full table-auto'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className='bg-gray-2 text-left dark:bg-meta-4'
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className='p-2 w-[40px] text-xs text-black dark:text-white'
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        {header.column.getCanFilter() ? (
                          <div className='my-4'>
                            <Filter column={header.column} />
                          </div>
                        ) : null}
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            const { original } = row;
            return (
              <tr
                key={row.original?.id}
                className={`border border-b border-[#eee] cursor-pointer ${(original?.isMain  && 'font-semibold text-emerald-700 bg-emerald-300')} `}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      className=' text-xs w-[40px] border border-b border-[#eee] p-2 dark:border-strokedark'
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
