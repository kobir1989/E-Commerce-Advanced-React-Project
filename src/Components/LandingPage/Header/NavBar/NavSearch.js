import React, { useContext } from 'react';
import Icons from '../../../UI/Icons';
import brandLogo from '../../../../Assets/ecom-logo.png';
import { Link } from 'react-router-dom';
import { Context } from '../../../Store/context';
const NavSearch = ({
  onManue,
  showManue,
  onLoginBtn,
  onShowCart,
  showUserLogin,
}) => {
  const ctx = useContext(Context);
  const cartItemQntt = ctx.items.map((item) => item.qntt);
  const totalQntt = cartItemQntt.reduce((acc, ele) => acc + ele, 0);

  return (
    <section className='mt-6'>
      <div className=' m-4  flex justify-between items-center 3xl:w-8/12 lg:w-11/12  lg:mx-auto'>
        <div className=' flex items-center '>
          <Link to='/home'>
            <img className=' w-[4rem] lg:w-[7rem]' src={brandLogo} alt='' />
          </Link>
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

        <div className=' hidden lg:flex text-gray relative'>
          <button
            className='mx-6 bg-[#f5f5f5] w-[3rem] h-[3rem] rounded-full hover:text-red flex items-center justify-center'
            onClick={onLoginBtn}
          >
            <span className='text-[1.2rem]'>
              <Icons name={'User'} />
            </span>
          </button>
          <button
            className='relative bg-[#f5f5f5] w-[3rem]  h-[3rem] rounded-full hover:text-red items-center flex justify-center'
            onClick={onShowCart}
          >
            <span className='px-2 text-white absolute -right-2 -top-4 rounded-full bg-red'>
              {totalQntt}
            </span>
            <span className='text-[1.5rem]'>
              <Icons name={'Cart'} />
            </span>
          </button>
          {!showUserLogin && (
            <div className='bg-white shadow-2xl rounded w-[20rem] h-[8rem] flex flex-col items-center absolute right-0 top-12 z-40 text-center'>
              <Link to='/login'>
                <p className='my-4 text-[1.2rem] font-medium hover:text-red hover:bg-lightGray w-full p-1'>
                  Login
                </p>
              </Link>
              <Link to='/signup'>
                <p className=' text-[1.2rem] font-medium hover:text-red hover:bg-lightGray w-full p-1'>
                  Sign up
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
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
    </section>
  );
};

export default NavSearch;
