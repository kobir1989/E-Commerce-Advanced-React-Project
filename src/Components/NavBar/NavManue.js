import React from 'react';
import Icons from '../../Utils/Icons';
import { Link } from 'react-router-dom';
import './NavBar.css';
import NavCategory from './NavCategory';
const NavManue = ({ onCategory, showCategory, showManue }) => {
  return (
    <section
      className='lg:flex lg:justify-between lg:items-center
     lg:w-11/12 3xl:w-8/12   lg:mx-auto lg:mt-4 py-2 lg:relative text-gray'
    >
      <div className='hidden lg:flex w-3/12'>
        <div
          className=' bg-[#f5f5f5] p-2 rounded color_anim w-full lg:flex 
          lg:justify-between items-center'
          onClick={onCategory}
        >
          <button className='flex items-center'>
            <span className='mx-4  mx-3 text-[1.2rem]'>
              <Icons name={'Category'} />
            </span>
            <span> Category</span>
          </button>
          <div className='relative'>
            {!showCategory ? (
              <Icons name={'ArrowDown'} className='inline-block bump' />
            ) : (
              <Icons name={'ArrowForward'} className='inline-block bump' />
            )}
          </div>
        </div>
        {!showCategory && <NavCategory />}
      </div>
      <div
        className={
          !showManue
            ? 'bg-white w-full z-20 lg:w-6/12 pb-6 lg:pb-0 lg:mx-0 absolute lg:relative right-0 slide_down_anim'
            : 'hidden lg:flex '
        }
      >
        <ul className='flex lg:flex-row  flex-col mx-10 lg:mx-0 z-20'>
          <li className='my-4 lg:my-0 mx-3 hover:text-red flex justify-between lg:items-center'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='my-4 lg:my-0 mx-3 hover:text-red  flex justify-between lg:items-center'>
            <Link to=''>Mega Menue</Link>
            <span className='ml-2'>
              <Icons name={'ArrowDown'} />
            </span>
          </li>
          <li className='my-4 lg:my-0 mx-3 hover:text-red  flex justify-between lg:items-center'>
            <Link to='/login'>User Account</Link>
            <span className='ml-2'>
              <Icons name={'ArrowDown'} />
            </span>
          </li>
          <li className='my-4 lg:my-0 mx-3 hover:text-red  flex justify-between lg:items-center'>
            <Link to=''>Vendor Account</Link>
            <span className='ml-2'>
              <Icons name={'ArrowDown'} />
            </span>
          </li>
          <li className='my-4 lg:my-0 mx-3 hover:text-red  flex justify-between lg:items-center'>
            <Link to='/products'>All Products</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavManue;
