import { Row, flexRender } from '@tanstack/react-table';
import WhatsAppButton from './WhatsAppButton';

export default function Card({ row }: { row: Row<any> }) {
  return (
    <section>
      <div className='max-w-sm my-2 bg-white shadow shadow-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href='#'>
          <img
            className='rounded-t-lg'
            src='images/plane.jpg'
            alt='card_image'
          />
        </a>
        <div className='p-5'>
          <div className='font-normal text-gray-700 dark:text-gray-400'>
            <div
              className={`p-4 cursor-pointer bg-gray-800 rounded-lg shadow-lg `}
            >
              {row.getVisibleCells().map((cell) => (
                <div
                  className='text-xs text-white dark:border-strokedark'
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          </div>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
