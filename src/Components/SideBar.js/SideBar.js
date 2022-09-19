import React from 'react';
import { Link } from 'react-router-dom';
import BtnShopNow from '../../Utils/BtnShopNow';
const SideBar = (props) => {
  return (
    <div className='bg-white p-6 w-[15rem] h-[26rem] rounded-xl'>
      <div className='my-6'>
        <h2 className='text-[1.2rem] font-medium'>Categoris</h2>
      </div>
      <div className='flex flex-col items-start gap-4'>
        <Link to='/products'>
          <h3 className='text-[.9rem] text-gray font-medium hover:text-red'>
            T-Shirts
          </h3>
        </Link>
        <Link to='/products'>
          <h3 className='text-[.9rem] text-gray font-medium hover:text-red'>
            Men's Wear
          </h3>
        </Link>
        <Link to='/products'>
          <h3 className='text-[.9rem] text-gray font-medium hover:text-red'>
            Women's Wear
          </h3>
        </Link>
        <Link to='/products'>
          <h3 className='text-[.9rem] text-gray font-medium hover:text-red'>
            Watch
          </h3>
        </Link>
        <Link to='/products'>
          <h3 className='text-[.9rem] text-gray font-medium hover:text-red'>
            Sunglass
          </h3>
        </Link>
        <Link to='/products'>
          <h3 className='text-[.9rem] text-gray font-medium hover:text-red'>
            Feshion
          </h3>
        </Link>
        <Link to='/products'>
          <h3 className='text-[.9rem] text-gray font-medium hover:text-red'>
            Shoes
          </h3>
        </Link>
      </div>
      <BtnShopNow btnName={'Browse All'} />
    </div>
  );
};

export default SideBar;
