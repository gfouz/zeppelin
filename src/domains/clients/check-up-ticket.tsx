import Layout from '../../components/layout/Layout.tsx';
import CheckUpTicketForm from './CheckUpTicketForm.tsx';

const links = ['/', '/vuelos', '/mi reserva', '/signin'];

const CheckUpTicketPage = () => {
  return (
    <Layout links={links}>
      <section className='bg-[#F1F5F9]'>
        <CheckUpTicketForm />
      </section>
    </Layout>
  );
};

export default CheckUpTicketPage;
