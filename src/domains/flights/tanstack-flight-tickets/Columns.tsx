type IGetValue = () => string;

export const columnsProperties = [
  {
    accessorKey: 'airline', // Clave de acceso de datos
    header: 'Aerolínea', // Encabezado de la columna
  },
  {
    accessorKey: 'status',
    cell: (info: { getValue: IGetValue }) => (
      <i
        className={`tracking-widest ${(info.getValue() == 'available' && 'text-green-400') || (info.getValue() == 'booked' && 'text-rose-500')} font-extrabold`}
      >
        {info.getValue()}
      </i>
    ),
    header: 'Estado',
  },
  {
    accessorKey: 'infant_price',
    cell: (info: { getValue: IGetValue }) => (
      <i className=''>{info.getValue()}</i>
    ),
    header: 'Precio (Infantes)',
  },
  {
    accessorKey: 'child_price',
    header: 'Precio (Niños)',
  },
  {
    accessorKey: 'adult_price',
    header: 'Precio (Adultos)',
  },
  {
    accessorKey: 'booking_code',
    header: 'Código de Reserva',
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
