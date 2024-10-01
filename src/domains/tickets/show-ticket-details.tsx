import Layout from '../layout/DefaultLayout.tsx';
import TicketDetailsComponent from './TicketDetailsComponent.tsx';

const TicketDetailsPage = () => {
  return (
    <Layout model='Pasajes (detalles)'>
      <TicketDetailsComponent />
    </Layout>
  );
};

export default TicketDetailsPage;
