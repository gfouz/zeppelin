import Modal from './Modal.tsx';
import { Flight } from '../../../flights.types.ts';

type OriginalI = {
  original: Flight;
};

interface IRow {
  row: OriginalI;
}

export const columnsProperties = [
  {
    accessorKey: 'first_name',
    header: 'Nombre',
  },
  {
    accessorKey: 'last_name',
    header: 'apellido',
  },
  {
    accessorKey: 'email',
    header: 'Correo Electrónico',
  },
  {
    accessorKey: 'user_permissions',
    header: 'Permisos',
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
