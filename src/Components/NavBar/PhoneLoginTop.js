import React, { useContext } from 'react';
import Icons from '../../Utils/Icons';
import { Context } from '../../Store/context';
import { WishContext } from '../../Store/context';
import { ModalContext } from '../../Store/context';
import { Link } from 'react-router-dom';
const PhoneLoginTop = ({ showUserLogin, onLoginBtn }) => {
  const modalCtx = useContext(ModalContext);
  const wishCtx = useContext(WishContext);
  const ctx = useContext(Context);
  const cartItemQntt = ctx.items.map((item) => item.qntt);
  const totalQntt = cartItemQntt.reduce((acc, ele) => acc + ele, 0);
  return (
    <div className=' hidden lg:flex text-gray relative'>
      <button
        className=' bg-[#f5f5f5] w-[3rem] h-[3rem] rounded-full
             hover:text-red flex items-center justify-center'
        onClick={onLoginBtn}
      >
        <span className='text-[1.2rem]'>
          <Icons name={'User'} />
        </span>
      </button>
      <button
        className='mx-6 relative bg-[#f5f5f5] w-[3rem]  h-[3rem]
             rounded-full hover:text-red items-center flex justify-center'
        onClick={modalCtx.showCartHandler}
      >
        <span
          className='px-2 text-white absolute -right-2 -top-4 
            rounded-full bg-red'
        >
          {totalQntt}
        </span>
        <span className='text-[1.5rem]'>
          <Icons name={'Cart'} />
        </span>
      </button>
      <button
        className='relative bg-[#f5f5f5] w-[3rem]  h-[3rem] rounded-full
             hover:text-red 
            items-center flex justify-center'
        onClick={modalCtx.openWishListHandler}
      >
        <span
          className='px-2 text-white absolute -right-2 -top-4
             rounded-full bg-red'
        >
          {wishCtx.wishList.length}
        </span>
        <span className='text-[1.5rem]'>
          <Icons name={'Heart'} />
        </span>
      </button>
      {!showUserLogin && (
        <div
          className='bg-white shadow-2xl rounded w-[20rem] h-[8rem] flex
             flex-col items-center
             absolute right-0 top-12 z-40 text-center'
        >
          <Link to='/login'>
            <p
              className='my-4 text-[1.2rem] font-medium hover:text-red 
                hover:bg-lightGray w-full p-1'
            >
              Login
            </p>
          </Link>
          <Link to='/signup'>
            <p
              className=' text-[1.2rem] font-medium hover:text-red
                 hover:bg-lightGray w-full p-1'
            >
              Sign up
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PhoneLoginTop;
