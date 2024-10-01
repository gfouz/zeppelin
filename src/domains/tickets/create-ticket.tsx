import Layout from '../layout/DefaultLayout.tsx';
import CreateTicketForm from './CreateTicketForm.tsx';

const CreateTicketPage = () => {
  return (
    <Layout model='Pasajes'>
      <CreateTicketForm />
    </Layout>
  );
};

export default CreateTicketPage;
