import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../../Utils/Icons';
const PhoneNavBottom = ({ onLoginBtn }) => {
  return (
    <div className='fixed bottom-0 p-2 z-20 bg-white  w-full lg:hidden '>
      <div>
        <ul className='flex  justify-evenly items-center text-[.8rem]'>
          <li className='flex flex-col items-center hover:text-red '>
            <Link to='/home'>
              <span className='mb-2 text-[1rem] text-gray hover:text-red'>
                <Icons name={'Home'} />
              </span>

              <span>Home</span>
            </Link>
          </li>
          <li className='flex flex-col items-center hover:text-red '>
            <Link to='/products'>
              <span className='mb-2 text-[1rem] text-gray'>
                <Icons name={'Category'} />
              </span>
              <span> Category</span>
            </Link>
          </li>
          <button className='flex flex-col items-center hover:text-red '>
            <Link to='/shopingcart'>
              <span className='mb-2 text-[1rem] text-gray'>
                <Icons name={'Cart'} />
              </span>
              <span> Cart</span>
            </Link>
          </button>
          <button
            className='flex flex-col items-center hover:text-red '
            onClick={onLoginBtn}
          >
            <Link to='/login'>
              <span className='mb-2 text-[1rem] text-gray'>
                <Icons name={'User'} />
              </span>
              <span> Account</span>
            </Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default PhoneNavBottom;
