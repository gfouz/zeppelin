import Layout from '../layout/DefaultLayout.tsx';
import SignInForm from './SignInForm.tsx';

const SignInPage = () => {
  return (
    <Layout model='Login'>
      <SignInForm />
    </Layout>
  );
};

export default SignInPage;
