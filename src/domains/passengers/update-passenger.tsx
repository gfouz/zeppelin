import Layout from '../layout/DefaultLayout.tsx';
import UpdatePassengerForm from './CreatePassengerForm.tsx';

const UpdatePassengerPage = () => {
  return (
    <Layout model='Editar Cliente'>
      <UpdatePassengerForm />
    </Layout>
  );
};

export default UpdatePassengerPage;
