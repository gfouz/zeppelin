import Layout from '../components/layout/Layout.tsx';

const links = ['/', '/vuelos', '/mi reserva', '/signin'];

const Root = () => {
  return (
    <Layout links={links}>
      <main className='flex items-center justify-center'>
        <section className='w-full relative shadow shadow-2xl'>
          <img
            className='max-w-[100%] h-auto'
            src='images/space.jpg'
            alt='woman on laptop'
          />
          <section className='absolute top-0 flex px-8 justify-center left-0 w-full h-full'></section>
        </section>
      </main>
    </Layout>
  );
};

export default Root;
