import Layout from '../layout/DefaultLayout.tsx';
import TanStackTable from './tanstack-table/TanStackTable.tsx';

const Passengers = () => {
  return (
    <Layout model='Passengers'>
      <TanStackTable />
    </Layout>
  );
};

export default Passengers;
