import Modal from './Modal.tsx';
import { Passenger } from '../../../passenger.types.ts';

type OriginalI = {
  original: Passenger;
};

interface IRow {
  row: OriginalI;
}

export const columnsProperties = [
  {
    accessorKey: 'first_name', // Clave de acceso de datos
    header: 'Nombre', // Encabezado de la columna
  },
  {
    accessorKey: 'last_name',
    header: 'Apellidos',
  },
  {
    accessorKey: 'passport',
    header: 'Pasaporte',
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
