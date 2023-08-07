import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex fixed z-40 justify-center xl:justify-between items-center xl:px-36 mx-auto w-full h-16 xl:h-20 bg-slate-800 border-b border-slate-700'>
      <div className='flex gap-5 justify-center items-center'>
        <Link
          to='/'
          className='flex space-x-5 items-center'>
          <Logo />
          <h1 className='text-white font-black text-sm xl:text-base'>
            MOVIE APPS
          </h1>
        </Link>
        {/* <RadixDropdown /> */}
      </div>
      {/* <div><SearchField /></div> */}
    </div>
  );
};

export default Navbar;
