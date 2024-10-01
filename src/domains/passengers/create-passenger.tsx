import Layout from '../layout/DefaultLayout.tsx';
import CreatePassengerForm from './CreatePassengerForm.tsx';

const CreatePassengerPage = () => {
  return (
    <Layout model='Asociar Cliente'>
      <CreatePassengerForm />
    </Layout>
  );
};

export default CreatePassengerPage;
