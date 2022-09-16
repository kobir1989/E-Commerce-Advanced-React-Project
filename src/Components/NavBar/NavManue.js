import React from 'react';
import Icons from '../../Utils/Icons';
import { Link } from 'react-router-dom';
const NavManue = ({ onCategory, showCategory, showManue }) => {
  return (
    <section className='lg:flex lg:justify-between lg:items-center lg:w-11/12 3xl:w-8/12   lg:mx-auto lg:mt-4 py-2 lg:relative text-gray'>
      <div className='hidden lg:flex w-3/12'>
        <div
          className=' bg-[#f5f5f5] p-2 rounded color_anim w-full lg:flex lg:justify-between items-center'
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
        {!showCategory && (
          <div className='bg-white rounded shadow-xl absolute -top-[-3rem] left-0 text-gray w-[19.8rem] slide_anim z-40'>
            <ul className='m-4'>
              <li className='p-4 hover:bg-[#f5f5f5] flex items-center'>
                <span className='mr-4 text-[1.5rem]'>
                  <Icons name={'Cloths'} />
                </span>
                <Link to=''>Fashion</Link>
              </li>
              <li className='p-4 hover:bg-[#f5f5f5] flex items-center'>
                <span className='mr-4 text-[1.5rem]'>
                  <Icons name={'Laptop'} />
                </span>
                <Link to=''>Electronics</Link>
              </li>
              <li className='p-4 hover:bg-[#f5f5f5] flex items-center'>
                <span className='mr-4 text-[1.5rem]'>
                  <Icons name={'Gift'} />
                </span>
                <Link to=''>Gifts</Link>
              </li>
              <li className='p-4 hover:bg-[#f5f5f5] flex items-center'>
                <span className='mr-4 text-[1.5rem]'>
                  <Icons name={'Health'} />
                </span>
                <Link to=''>Health and Beauty</Link>
              </li>
              <li className='p-4 hover:bg-[#f5f5f5] flex items-center'>
                <span className='mr-4 text-[1.5rem]'>
                  <Icons name={'Shoes'} />
                </span>
                <Link to=''>Shoes</Link>
              </li>
            </ul>
          </div>
        )}
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
            <Link to='/products'>Pages</Link>
            <span className='ml-2'>
              <Icons name={'ArrowDown'} />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavManue;
