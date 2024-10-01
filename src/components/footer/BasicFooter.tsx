interface BasicFooterI {
  color?: string;
  background?: string;
}

const BasicFooter = ({ color, background }: BasicFooterI) => {
  return (
    <footer className={`${background} w-full text-black font-semibold p-6`}>
      <div className='flex flex-col items-center justify-between mt-6 md:flex-row'>
        <div>
          <a href='#' className={`${color} text-xl font-bold`}>
            fouz.dev
          </a>
        </div>
        <div className='flex mt-4 md:m-0 '>
          <div className='-mx-4'>
            <a
              href='https://github.com/gfouz'
              className={`${color} px-4 text-sm`}
            >
              Github
            </a>
            <a href='/blog-dashboard' className={`${color} px-4 text-sm`}>
              Blog
            </a>
            <a href='https://dev.to/gfouz' className={`${color} px-4 text-sm`}>
              Dev Community
            </a>
            <a href='#' className={`${color} px-4 text-sm`}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BasicFooter;
