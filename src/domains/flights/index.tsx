import Layout from '../layout/DefaultLayout.tsx';
import TanStackTable from './tanstack-table/TanStackTable.tsx';

const Flights = () => {
  return (
    <Layout model='Vuelos'>
      <TanStackTable />
    </Layout>
  );
};

export default Flights;
