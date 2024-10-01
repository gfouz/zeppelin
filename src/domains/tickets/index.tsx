import Layout from '../layout/DefaultLayout.tsx';
import TanStackTable from './tanstack-table/TanStackTable.tsx';
import { getListService } from '../../services/getListService.ts';
import { useGetListQuery } from '../../hooks/useGetListQuery.tsx';

const url = 'http://127.0.0.1:8000/api/tickets/get-tickets';

const Tickets = () => {
  const { payload } = useGetListQuery(getListService, url, ['get-tickets']);
  return (
    <Layout model='Pasajes'>
      <TanStackTable payload={payload} />
    </Layout>
  );
};

export default Tickets;
