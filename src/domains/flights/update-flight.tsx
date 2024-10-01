import Layout from '../layout/DefaultLayout.tsx';
import UpdateFlightForm from './UpdateFlightForm.tsx';

const UpdateFlightPage = () => {
  return (
    <Layout model='Vuelos'>
      <UpdateFlightForm />
    </Layout>
  );
};

export default UpdateFlightPage;
