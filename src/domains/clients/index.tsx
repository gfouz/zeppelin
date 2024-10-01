import Layout from '../../components/layout/Layout.tsx';
import TanStackTable from './tanstack-table/TanStackTable.tsx';

const links = ['/', '/vuelos', '/mi reserva', '/signin'];

const FlightsForClients = () => {
  return (
    <Layout links={links}>
      <section className='bg-white py-6'>
        <TanStackTable />
      </section>
    </Layout>
  );
};

export default FlightsForClients;
