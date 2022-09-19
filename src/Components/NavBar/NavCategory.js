import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../../Utils/Icons';
const NavCategory = () => {
  return (
    <div
      className='bg-white rounded shadow-xl absolute -top-[-3rem]
           left-0 text-gray w-[19.8rem] slide_anim z-40'
    >
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
  );
};

export default NavCategory;
