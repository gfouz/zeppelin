import { useState, useMemo } from 'react';
import Card from './Card.tsx';
import Filter from './Filter.tsx'; //---------Filter-------//

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
import { getListService } from '../../../services/getListService.ts';
import { useGetListQuery } from '../../../hooks/useGetListQuery.tsx';

declare module '@tanstack/react-table' {
  //allows us to define custom properties for our columns
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'text' | 'range' | 'select';
  }
}
const url = 'http://127.0.0.1:8000/api/flights/get-flights/clients';

export default function TanStackTable() {
  const { payload } = useGetListQuery(getListService, url, ['get-flights']);
  const mainFlights = payload?.filter(
    (ft) => ft.isMain == true && ft.status == 'available',
  );
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columns = useMemo<ColumnDef<any, any>[]>(() => columnsProperties, []);

  const table = useReactTable({
    data: mainFlights || [],
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
    <div className=''>
      <div className=''>
        <header>
          {table.getHeaderGroups().map((headerGroup) => (
            <div className='w-full flex  text-left' key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <section
                    className='w-full p-2 font-extrabold tracking-widest text-xs text-gray-700'
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : (
                      <>
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
                        {header.column.getCanFilter() ? (
                          <div className='my-4 !text-gray-900'>
                            <Filter column={header.column} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </section>
                );
              })}
            </div>
          ))}
        </header>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] place-content-center gap-2 w-full'>
          {table.getRowModel().rows.map((row) => {
            return (
              <div key={row?.original?.id}>
                <Card row={row} />
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex items-center gap-2 py-16 px-2'>
        <button
          className='border rounded p-1'
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className='flex items-center gap-1'>
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className='flex items-center gap-1'>
          | Go to page:
          <input
            type='number'
            min='1'
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className='border p-1 rounded w-16'
          />
        </span>
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
    </div>
  );
}
