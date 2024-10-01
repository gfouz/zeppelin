import Modal from './Modal.tsx';
import { Flight } from '../../../flights.types.ts';

type IGetValue = () => string;

type OriginalI = {
  original: Flight;
};

interface IRow {
  row: OriginalI;
}

export const columnsProperties = [
  {
    accessorKey: 'isMain', // Clave de acceso de datos
    header: 'Vuelo', // Encabezado de la columna
    cell: (info: { getValue: IGetValue }) => (
      <i
        className={`tracking-widest flex justify-center text-center ${Boolean(info.getValue()) == true && 'text-black' || Boolean(info.getValue()) == false &&  'text-rose-500' }`}
      >
        {Boolean(info.getValue()) == true ? 'Principal' : 'Conectado'}
      </i>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Estado',
  },
  {
    accessorKey: 'departure_place',
    header: 'Origen',
  },
  {
    accessorKey: 'arrival_place',
    header: 'Destino',
  },
  {
    accessorKey: 'departure_time',
    header: 'Hora de salida',
  },
  {
    accessorKey: 'arrival_time',
    header: 'Hora de llegada',
  },
  {
    accessorKey: 'departure_date',
    header: 'Fecha de vuelo',
  },
  {
    accessorKey: 'actions', // Puedes usar un accessor que no exista en los datos, solo para la presentación
    header: 'Actions', // Título de la columna
    cell: ({ row }: IRow) => <Modal payload={row.original} />,
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
