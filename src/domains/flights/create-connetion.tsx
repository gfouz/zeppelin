import Layout from '../layout/DefaultLayout.tsx';
import CreateConnectionForm from './CreateConnectionForm.tsx';

const CreateConnectionPage = () => {
  return (
    <Layout model='Vuelo con Conexión'>
      <CreateConnectionForm />
    </Layout>
  );
};

export default CreateConnectionPage;
