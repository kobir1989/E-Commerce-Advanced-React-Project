import React, { useContext } from 'react';
import Icons from '../../Utils/Icons';
import brandLogo from '../../Assets/ecom-logo.png';
import { Link } from 'react-router-dom';
import PhoneNavBottom from './PhoneNavBottom';
import PhoneLoginTop from './PhoneLoginTop';
const NavSearch = ({ onManue, showManue, onLoginBtn, showUserLogin }) => {
  return (
    <section className='mt-6'>
      <div
        className=' m-4  flex justify-between items-center 3xl:w-8/12
       lg:w-11/12  lg:mx-auto'
      >
        <div className=' flex items-center '>
          <Link to='/home'>
            <img className=' w-[4rem] lg:w-[7rem]' src={brandLogo} alt='' />
          </Link>
        </div>
        <div
          className='w-6/12 relative border-[1px] border-lightGray 
        hover:border-red rounded-full'
        >
          <span
            className='lg:inline-block absolute bottom-4 right-6
           text-lightGray'
          >
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
        <PhoneLoginTop onLoginBtn={onLoginBtn} showUserLogin={showUserLogin} />
      </div>

      <PhoneNavBottom onLoginBtn={onLoginBtn} />
    </section>
  );
};

export default NavSearch;
