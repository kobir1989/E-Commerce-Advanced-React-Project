import React from 'react';
import Icons from '../../../UI/Icons';
import brandLogo from '../../../../Assets/ecom-logo.png';
const NavSearch = ({ onManue, showManue }) => {
  return (
    <section className='mt-6'>
      <div className=' m-4  flex justify-between items-center 3xl:w-8/12 lg:w-11/12  lg:mx-auto'>
        <div className=' flex items-center '>
          <img className=' w-[4rem] lg:w-[7rem]' src={brandLogo} alt='' />
          <h2 className='text-red text-[1.2rem] font-bold'>e-shop</h2>
        </div>
        <div className='w-6/12 relative border-[1px] border-lightGray hover:border-red rounded-full'>
          <span className='lg:inline-block absolute bottom-4 right-6 text-lightGray'>
            <Icons name={'Search'} />
          </span>
          <input
            type='text'
            placeholder='Searching For...'
            className='focus:outline-none w-full p-3 rounded-full text-sm'
          />
        </div>
        {showManue ? (
          <span className='lg:hidden text-[1.5rem]' onClick={onManue}>
            <Icons
              name={'Manue'}
              className='text-[1.5rem] mx-auto text-gray '
            />
          </span>
        ) : (
          <span className='lg:hidden text-[1.5rem] text-red' onClick={onManue}>
            <Icons name={'Cross'} />
          </span>
        )}

        <div className=' hidden lg:flex text-gray '>
          <button className='mx-6 bg-[#f5f5f5] w-[3rem] h-[3rem] rounded-full hover:text-red flex items-center justify-center'>
            <span className='text-[1.2rem]'>
              <Icons name={'User'} />
            </span>
          </button>
          <button className='relative bg-[#f5f5f5] w-[3rem]  h-[3rem] rounded-full hover:text-red items-center flex justify-center'>
            <span className='px-2 text-white absolute -right-2 -top-4 rounded-full bg-red'>
              0
            </span>
            <span className='text-[1.5rem]'>
              <Icons name={'Cart'} />
            </span>
          </button>
        </div>
      </div>
      <div className='fixed bottom-0 p-2 z-20 bg-white  w-full lg:hidden '>
        <div>
          <ul className='flex  justify-evenly items-center text-[.8rem]'>
            <li className='flex flex-col items-center hover:text-red '>
              <span className='mb-2 text-[1rem] text-gray hover:text-red'>
                <Icons name={'Home'} />
              </span>
              <a href='#'>Home</a>
            </li>
            <li className='flex flex-col items-center hover:text-red '>
              <span className='mb-2 text-[1rem] text-gray hover:text-red'>
                <Icons name={'Category'} />
              </span>
              <a href='#'>Category</a>
            </li>
            <li className='flex flex-col items-center hover:text-red '>
              <span className='mb-2 text-[1rem] text-gray hover:text-red'>
                <Icons name={'Cart'} />
              </span>
              <a href='#'>Cart</a>
            </li>
            <li className='flex flex-col items-center hover:text-red '>
              <span className='mb-2 text-[1rem] text-gray hover:text-red'>
                <Icons name={'User'} />
              </span>
              <a href='#'>Account</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavSearch;
