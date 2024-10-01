import Layout from '../layout/DefaultLayout.tsx';
import CreateSettingForm from './CreateSettingForm.tsx';

const CreateSettingPage = () => {
  return (
    <Layout model='Añadir Ajustes'>
      <CreateSettingForm />
    </Layout>
  );
};

export default CreateSettingPage;
