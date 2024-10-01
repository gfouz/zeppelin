const EnterpriseFooter = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto p-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Column 1 */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>About Me</h3>
            <p className='text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero et nunc condimentum.
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='/' className='text-sm hover:text-gray-400'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-gray-400'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='text-sm hover:text-gray-400'>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Social Media</h3>
            <div className='flex space-x-4'>
              <a href='#' className='text-lg hover:text-gray-400'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href='#' className='text-lg hover:text-gray-400'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#' className='text-lg hover:text-gray-400'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className='mt-8 border-t border-gray-800 pt-4 text-sm text-center'>
          <p>&copy; 2024 software developer. Fouz.dev.</p>
        </div>
      </div>
    </footer>
  );
};

export default EnterpriseFooter;
