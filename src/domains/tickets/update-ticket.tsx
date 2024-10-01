import Layout from '../layout/DefaultLayout.tsx';
import UpdateTicketForm from './UpdateTicketForm.tsx';

const UpdateTicketPage = () => {
  return (
    <Layout model='Pasajes'>
      <UpdateTicketForm />
    </Layout>
  );
};

export default UpdateTicketPage;
