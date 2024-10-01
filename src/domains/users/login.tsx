import EnterpriseLogin from '../../components/login/EnterpriseLogin.tsx';
import Layout from '../../components/layout/Layout.tsx';

const links = ['/', '/login', '/register'];

const LoginPage = () => {
  return (
    <Layout links={links}>
      <EnterpriseLogin />
    </Layout>
  );
};

export default LoginPage;
