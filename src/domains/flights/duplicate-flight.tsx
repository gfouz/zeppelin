import Layout from '../layout/DefaultLayout.tsx';
import DuplicateFlightForm from './DuplicateFlightForm.tsx';

const DuplicateFlightPage = () => {
  return (
    <Layout model='Vuelos'>
      <DuplicateFlightForm />
    </Layout>
  );
};

export default DuplicateFlightPage;
