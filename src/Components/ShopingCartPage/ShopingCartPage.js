import React, { useState } from 'react';
import Footer from '../LandingPage/Footer/Footer';
import NavBar from '../LandingPage/Header/NavBar/NavBar';
import Cart from '../LandingPage/Cart/Cart';
import Icons from '../UI/Icons';
import OrderDetailsForm from './OrderDetailsForm';
import { Context } from '../Store/context';
import { useContext } from 'react';
const ShopingCartPage = () => {
  const ctx = useContext;
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(!showCart);
  };
  return (
    <section>
      <NavBar onShowCart={showCartHandler} />
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <div className='lg:w-6/12 w-11/12 mx-auto flex flex-wrap justify-center gap-4  lg:justify-between items-center lg:mt-20 mt-10 relative'>
        <span className='hidden lg:flex border-b-[4px] border-[#EF9F9F] w-full absolute z-0'></span>
        <button className='lg:w-[12rem] w-[9rem] h-[2.5rem] rounded-full bg-red text-white font-medium z-20'>
          1. Cart
        </button>
        <button className='lg:w-[12rem] w-[9rem] h-[2.5rem] rounded-full text-red font-medium bg-[#FAD4D4] z-20'>
          2. Address
        </button>
        <button className='lg:w-[12rem] w-[9rem] h-[2.5rem] rounded-full text-red font-medium bg-[#FAD4D4] z-20'>
          3. Payment
        </button>
        <button className='lg:w-[12rem] w-[9rem] h-[2.5rem] rounded-full text-red font-medium bg-[#FAD4D4] z-20'>
          4. Review Cart
        </button>
      </div>
      <section className='overflow-y-auto 3xl:w-8/12 lg:W-11/12 w-full mx-auto flex lg:flex-row flex-col justify-between mt-20'>
        <div
          className=' relative bg-white rounded-2xl lg:w-7/12 w-11/12 h-[10rem] lg:mx-0 mx-auto border-b-[1px] border-t-[.5px]
             p-4 border-[#F2F2F2] py-6 flex justify-start items-center '
        >
          <div className='w-[8rem] h-[8rem] mr-6'>
            <img className='w-full h-full' src='' alt='' />
          </div>
          <div>
            <div>
              <h3 className='mb-1 font-medium text-[1.2rem]'>T-shirt</h3>
              <div className='flex items-center'>
                <span className='text-[.9rem] text-gray text-[1rem]'>
                  $100 X 2
                </span>
                <p className='text-red my-2 text-[1.1rem] ml-2'>$300</p>
              </div>
            </div>
            <div className='flex flex-row justify-start gap-4 items-center font-medium'>
              <button className=' flex justify-center items-center w-[2rem] h-[2rem] border-[1px] border-[#FFC3C3] rounded'>
                <span className='text-red'>
                  <Icons name={'Plus'} />
                </span>
              </button>
              <span className='my-2'>2</span>
              <button className='flex justify-center items-center w-[2rem] h-[2rem] border-[1px] border-[#FFC3C3] rounded'>
                <span className='text-red'>
                  <Icons name={'Minus'} />
                </span>
              </button>
            </div>
          </div>
          <div className='absolute right-4 top-4'>
            <button>
              <span className='text-[1.4rem] text-[#FFC3C3] hover:text-red'>
                <Icons name={'Cross'} />
              </span>
            </button>
          </div>
        </div>
        <div className=' lg:w-4/12 w-11/12 mx-auto lg:mx-0 my-6 lg:my-0 bg-white rounded-2xl p-8'>
          <div className='flex justify-between items-center border-b-[1px] border-lightGray pb-4'>
            <h2 className='text-[1.5rem] font-medium'>Total : </h2>
            <h2 className='text-[1.5rem] text-red'>$200.22</h2>
          </div>
          <OrderDetailsForm />
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default ShopingCartPage;
