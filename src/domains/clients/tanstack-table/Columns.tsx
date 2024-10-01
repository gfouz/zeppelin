

type IDateGetValue = () => string | number | Date;
type IGetValue = () => string;

export const columnsProperties = [
  {
    accessorKey: 'departure_place',
    cell: (info: { getValue: IGetValue }) => (
      <h2 className='text-slate-500 font-extrabold text-lg'>
        {info.getValue()}
      </h2>
    ),
    header: 'Por Origen',
  },
  {
    accessorKey: 'arrival_place',
    cell: (info: { getValue: IGetValue }) => (
      <i className='text-slate-500 font-extrabold text-lg'>{info.getValue()}</i>
    ),
    header: 'Por Destino',
  },
  {
    accessorKey: 'adult_price',
    cell: (info: { getValue: IGetValue }) => (
      <i className='text-slate-500 font-extrabold text-lg'>
        Precio: {info.getValue()}$
      </i>
    ),
    header: 'Por Precio',
  },
  {
    accessorKey: 'departure_date',
    cell: (info: { getValue: IDateGetValue }) => (
      <i className='text-rose-500 text-xl font-semibold'>
        {new Date(info.getValue()).toLocaleDateString()}
        
      </i>
    ),
    header: 'Por Fecha',
  },
];

/* function handleClick(row: any): void {
  throw new Error("Function not implemented.");
}

 
(property) cell: ({ row }: {
    row: any;
}) => JSX.Element

cell: ({ row }: {
    row: any;
}) => JSX.Element

*/
