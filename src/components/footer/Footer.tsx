import CommentsForm from '../../components/form/CommentsForm.tsx';

export default function Footer() {
  return (
    <footer className='bg-sky-900 text-white flex justify-center px-4 w-[100%]'>
      <div className='container px-4 py-8'>
        <div className='flex justify-center py-6'>
          <CommentsForm />
        </div>
        <hr className='h-px mt-6 bg-gray-700 border-none' />

        <div className='flex  flex-col items-center justify-between mt-6 md:flex-row'>
          <div>
            <a
              href='https://github.com/gfouz'
              className='capitalize px-4 text-sm'
            >
              fouz.dev
            </a>
          </div>
          <div className='flex mt-4 md:m-0'>
            <div className='mx-4'>
              <a href='https://github.com/gfouz' className='px-4 text-sm'>
                Github
              </a>
              <a href='/blog-dashboard' className='px-4 text-sm'>
                Blog
              </a>
              <a href='https://dev.to/gfouz' className='px-4 text-sm'>
                DevCommunity
              </a>
              <a href='#' className='px-4 text-sm'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
