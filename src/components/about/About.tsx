import Modal from '../modal/Modal.tsx';
import { bio, title, info } from './content';

const About = () => {
  return (
    <section className='md:px-8 py-20 bg-black'>
      <div className='w-full h-full lg:flex gap-8'>
        <img
          className='max-w-full h-auto lg:max-w-[600px]'
          src='images/aboutme.jpg'
          alt='name'
        />
        <article className='lg:aspect-[600/783] p-8 grid items-center'>
          <div>
            <h4 className='mb-2 text-lg font-semibold text-primary'>
              A short biography about me.
            </h4>
            <h2 className='mb-2 text-3xl font-bold text-dark sm:text-[40px]/[48px]'>
              {title}
            </h2>
            <p className='mb-5 text-base text-body-color dark:text-dark-6'>
              {bio}
            </p>
            {/*<NavButton name='Dev Community' link='https://dev.to/gfouz' />*/}
            <Modal title={title} info={info} />
          </div>
        </article>
      </div>
    </section>
  );
};
export default About;
