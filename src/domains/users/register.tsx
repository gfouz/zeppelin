import Layout from '../../components/layout/Layout.tsx';
import MaterialDesignSignUp from '../../components/register/EnterpriseRegister.tsx';

const links = ['/', '/login', '/register'];

const RegisterPage = () => {
  return (
    <Layout links={links}>
      <MaterialDesignSignUp />
    </Layout>
  );
};

export default RegisterPage;
