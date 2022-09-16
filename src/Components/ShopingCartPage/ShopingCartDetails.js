import React from 'react';
import Icons from '../../Utils/Icons';
import OrderDetailsForm from './OrderDetailsForm';
import { Context } from '../../Store/context';
import { useContext } from 'react';
const ShopingCartDetails = () => {
  const ctx = useContext(Context);
  console.log(ctx.items);
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  };
  const addItemHandler = (item) => {
    console.log(console.log(item));
    ctx.addItems({
      title: item.title,
      price: item.price,
      id: item.id,
      img: item.img,
      qntt: 1,
    });
  };
  return (
    <section>
      <div className='lg:w-6/12 w-11/12 mx-auto flex flex-wrap justify-center gap-4  lg:justify-between items-center lg:mt-20 mt-10 relative z-0'>
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
        <div className='flex flex-col gap-4 lg:w-7/12 w-11/12 mx-auto'>
          {ctx.items.length === 0 ? (
            <p className='text-center text-red font-medium'>
              Your Cart is Empty! Please Add items to Cart
            </p>
          ) : (
            ''
          )}
          {ctx.items.map((item) => (
            <div
              key={item.id}
              className=' relative bg-white rounded-2xl  h-[10rem] lg:mx-0  border-b-[1px] border-t-[.5px]
             p-4 border-[#F2F2F2] py-6 flex justify-start items-center '
            >
              <div className='w-[8rem] h-[8rem] mr-6'>
                <img className='w-full h-full' src={item.img} alt='' />
              </div>
              <div>
                <div>
                  <h3 className='mb-1 font-medium text-[1.2rem]'>
                    {item.title}
                  </h3>
                  <div className='flex items-center'>
                    <span className='text-[.9rem] text-gray text-[1rem]'>
                      {item.price} X {item.qntt}
                    </span>
                    <p className='text-red my-2 text-[1.1rem] ml-2'>
                      {item.price * item.qntt}
                    </p>
                  </div>
                </div>
                <div className='flex flex-row justify-start gap-4 items-center font-medium'>
                  <button
                    className=' flex justify-center items-center w-[2rem] h-[2rem] border-[1px] border-[#FFC3C3] rounded'
                    onClick={() => {
                      addItemHandler(item);
                    }}
                  >
                    <span className='text-red'>
                      <Icons name={'Plus'} />
                    </span>
                  </button>
                  <span className='my-2'>{item.qntt}</span>
                  <button
                    className='flex justify-center items-center w-[2rem] h-[2rem] border-[1px] border-[#FFC3C3] rounded'
                    onClick={() => {
                      removeItemHandler(item.id);
                    }}
                  >
                    <span className='text-red'>
                      <Icons name={'Minus'} />
                    </span>
                  </button>
                </div>
              </div>
              <div className='absolute right-4 top-4'>
                <button
                  onClick={() => {
                    removeItemHandler(item.id);
                  }}
                >
                  <span className='text-[1.4rem] text-[#FFC3C3] hover:text-red'>
                    <Icons name={'Cross'} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=' lg:w-4/12 w-11/12 mx-auto lg:mx-0 my-6 lg:my-0 bg-white rounded-2xl p-8'>
          <div className='flex justify-between items-center border-b-[1px] border-lightGray pb-4'>
            <h2 className='text-[1.5rem] font-medium'>Total : </h2>
            <h2 className='text-[1.5rem] text-red'>
              ${Math.abs(ctx.totalPrice).toFixed(2)}
            </h2>
          </div>
          <OrderDetailsForm />
        </div>
      </section>
    </section>
  );
};

export default ShopingCartDetails;
