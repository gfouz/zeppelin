import { useLocation } from 'react-router-dom';

import { Ticket } from '../../tickets.types.ts';
import Layout from '../layout/DefaultLayout.tsx';
import TanStackTable from './tanstack-flight-tickets/TanStackTable.tsx';

const FlightTickets = () => {
  const location = useLocation();
  const data = location.state;
  const tickets = data?.tickets.map((item: Ticket) => item);
  //console.log(tickets)
  return (
    <Layout model='Pasajes por Vuelo'>
      <TanStackTable payload={tickets} />
    </Layout>
  );
};

export default FlightTickets;
