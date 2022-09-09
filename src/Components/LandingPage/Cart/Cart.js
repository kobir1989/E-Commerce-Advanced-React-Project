import React from 'react';
import Modal from '../../UI/Modal';
import Icons from '../../UI/Icons';
import imgss from '../../../Assets/nike1.png';
const Cart = ({ onCloseCart }) => {
  return (
    <Modal onClose={onCloseCart}>
      <section className='lg:w-[30rem] w-[80vw] h-[80vh] relative overflow-y-scroll relative'>
        <div className='absolute right-4 top-1 w-[2.5rem] h-[2.5rem] rounded-full bg-[#F7F5F2] flex justify-center items-center'>
          <button onClick={onCloseCart}>
            <span className='text-[1.4rem] text-red'>
              <Icons name={'Cross'} />
            </span>
          </button>
        </div>
        <div className='flex items-center w-full justify-start  mb-6   pb-4'>
          <sapan className='ml-4 text-[2rem] mr-4'>
            <Icons name={'Cart'} />
          </sapan>
          <h3 className='text-[1.5rem]'>Your Cart</h3>
        </div>
        <div className='border-b-[1px] border-t-[.5px]  border-[#F2F2F2] py-6 flex justify-between items-center m-4'>
          <div className='flex flex-col justify-between items-center'>
            <button className=' flex justify-center items-center w-[2rem] h-[2rem] border-[1px] border-red rounded-full'>
              <span className='text-red'>
                <Icons name={'Plus'} />
              </span>
            </button>
            <span className='my-2'>1</span>
            <button className='flex justify-center items-center w-[2rem] h-[2rem] border-[1px] border-red rounded-full'>
              <span className='text-red'>
                <Icons name={'Minus'} />
              </span>
            </button>
          </div>
          <div className='w-[5rem] h-[5rem]'>
            <img className='w-full h-full' src={imgss} alt='' />
          </div>
          <div className=''>
            <h3 className='mb-1 font-medium'>Nike shoes</h3>
            <span className='text-[.9rem] text-gray'>$200.00 x 1</span>
            <p className='text-red my-2 text-[1.1rem]'>$200.00</p>
          </div>
          <div>
            <button>
              <span className='text-[1.4rem] text-red'>
                <Icons name={'Cross'} />
              </span>
            </button>
          </div>
        </div>
        <div className='absolute w-11/12 mx-auto bottom-6 lg:left-6 left-2'>
          <button className='bg-red hover:bg-[#EE6983] text-white w-full h-[2.5rem] rounded-xl mb-4'>
            Checkout Now ($250.22)
          </button>
          <button className='w-full border-[1px] border-[#FFC4C4] hover:border-red rounded-xl h-[2.5rem]'>
            View Cart
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default Cart;
