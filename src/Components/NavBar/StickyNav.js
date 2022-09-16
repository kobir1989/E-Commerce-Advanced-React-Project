import React, { useContext } from 'react';
import Icons from '../../Utils/Icons';
import { Link } from 'react-router-dom';
import { Context } from '../../Store/context';
const StickyNav = () => {
  const ctx = useContext(Context);
  const cartItemQntt = ctx.items.map((item) => item.qntt);
  const totalQntt = cartItemQntt.reduce((acc, ele) => acc + ele, 0);

  return (
    <div className='relative hidden lg:flex'>
      <div
        className='  opacity-[0.5] hover:opacity-[1] w-[4rem] h-[4rem] fixed top-[90%] left-2 bg-red
         rounded-full z-20 flex items-center justify-center 
    text-white text-[2.5rem] hover:shadow-2xl'
      >
        <Link to='/shopingcart'>
          <span
            className='absolute -right-4 -top-6 w-[2rem] h-[2rem] 
    rounded-full flex items-center justify-center bg-red text-[1.5rem]'
          >
            {totalQntt}
          </span>
        </Link>
        <Link to='/shopingcart'>
          <Icons name='Cart' />
        </Link>
      </div>
    </div>
  );
};

export default StickyNav;
