import Modal from './Modal.tsx';
import { Setting } from '../../../settings.types.ts';

type OriginalI = {
  original: Setting;
};

interface IRow {
  row: OriginalI;
}

export const columnsProperties = [
  {
    accessorKey: 'whatsapp', // Clave de acceso de datos
    header: 'WhatsApp', // Encabezado de la columna
  },
  {
    accessorKey: 'available_days',
    header: 'Días disponibles',
  },
  {
    accessorKey: 'unavailable_days',
    header: 'Días no disponibles',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'actions', // Puedes usar un accessor que no exista en los datos, solo para la presentación
    header: 'Actions', // Título de la columna
    cell: ({ row }: IRow) => <Modal payload={row?.original} />,
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
