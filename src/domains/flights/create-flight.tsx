import Layout from '../layout/DefaultLayout.tsx';
import CreateFlightForm from './CreateFlightForm.tsx';

const CreateFlightPage = () => {
  return (
    <Layout model='Vuelos'>
      <CreateFlightForm />
    </Layout>
  );
};

export default CreateFlightPage;
