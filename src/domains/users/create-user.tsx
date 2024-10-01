import Layout from '../layout/DefaultLayout.tsx';
import CreateUserForm from './CreateUserForm.tsx';

const CreateUserPage = () => {
  return (
    <Layout model='Register'>
      <CreateUserForm />
    </Layout>
  );
};

export default CreateUserPage;
