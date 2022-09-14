import React from 'react';

const OrderDetailsForm = () => {
  return (
    <form action=''>
      <div className='w-full mt-6'>
        <label for='comments text-[1rem]'>
          Additional Comments
          <span className='text-red bg-[#FAD4D4] ml-4 px-2 rounde text-[.8rem]'>
            Note
          </span>
        </label>
        <textarea
          className='border-[1px] border-lightGray w-full rounded mt-4'
          id='comments'
          name='comments'
          rows='4'
          cols='50'
        ></textarea>
        <input
          type='text'
          placeholder='Voucher Number'
          className='border-[1px] border-lightGray w-full h-[2.5rem] rounded mt-4 placeholder:text-sm placeholder:p-2 mb-4'
        />
        <button className='w-full h-[2.5rem] border-[1px] border-[#FAD4D4] rounded text-red hover:bg-red hover:text-white'>
          Apply Voucher
        </button>
      </div>
      <div className='flex flex-col justify-between mt-10'>
        <div className='m-2'>
          <h2>Shipping Estimates</h2>
        </div>
        <div className='relative'>
          <label
            for='country'
            className='text-[.7rem] absolute top-2 bg-white  mx-[.8rem]'
          >
            Country
          </label>
          <select
            name='country'
            id='country'
            className='border-[1px] border-lightGray w-full h-[2.5rem] rounded mt-4 pl-2 mb-1 text-gray focus:border-red outline-none'
          >
            <option value='bangladesh'>Bangladesh</option>
            <option value='usa'>USA</option>
            <option value='canada'>Canada</option>
            <option value='denmark'>Denmark</option>
          </select>
        </div>
        <div className='relative'>
          <label
            for='state'
            className='text-[.7rem] absolute top-2 bg-white mx-[.8rem]'
          >
            State
          </label>
          <select
            name='state'
            id='state'
            className='border-[1px] border-lightGray w-full h-[2.5rem] text-gray rounded mt-4  pl-2 mb-1 focus:border-red outline-none'
          >
            <option value='dhaka'>Dhaka</option>
            <option value='new-york'>New York</option>
            <option value='toronto'>Toronto</option>
            <option value='copenhagen'>Copenhagen</option>
          </select>
        </div>
        <div>
          <input
            type='number'
            placeholder='Zip Code'
            className='border-[1px] border-lightGray w-full h-[2.5rem] rounded mt-4 placeholder:text-sm placeholder:p-2 mb-1'
          />
          <div className='mt-8'>
            <button className='w-full h-[2.5rem] border-[1px]  border-[#FAD4D4] rounded text-red hover:bg-red hover:text-white'>
              Calculate Shiping
            </button>
            <button className='w-full h-[2.5rem] border-[1px] my-4 border-[#FAD4D4] rounded bg-red text-white hover:bg-[#F65A83]'>
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrderDetailsForm;
