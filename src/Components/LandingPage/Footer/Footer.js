import React from 'react';
import Icons from '../../UI/Icons';
import logo from '../../../Assets/ecom-logo.png';
const Footer = () => {
  return (
    <section className=' bg-[#03203C] text-lightGray lg:h-[30rem] py-12 lg:py-0 mt-20 flex justify-center'>
      <div className='lg:w-8/12 mx-auto w-full  flex lg:flex-row flex-col items-center  justify-between'>
        <section className='lg:w-5/12 w-10/12 mb-8 lg:mb-0  flex flex-col justify-center'>
          <div className='w-[8rem] h-[4rem] mb-4'>
            <img src={logo} alt='' />
          </div>
          <div>
            <p className='text-[.8rem] w-[80%] mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, cum harum nobis dignissimos ratione similique.
            </p>
          </div>
          <div className='flex'>
            <button className='w-[12rem] h-[4rem] bg-[#2D4263] rounded flex justify-evenly items-center'>
              <div className='text-[2rem]'>
                <Icons name={'Google'} />
              </div>
              <div>
                <span className='text-[.7rem]'> Get it on</span> <br />
                <span className='text-[1rem] font-bold'>Google Play</span>
              </div>
            </button>
            <button className='w-[12rem] h-[4rem] bg-[#2D4263] flex justify-evenly items-center  mx-4'>
              <div className='text-[2rem]'>
                <Icons name={'Apple'} />
              </div>
              <div>
                <span className='text-[.7rem]'> Download on the</span> <br />
                <span className='text-[1rem] font-bold'>App Store</span>
              </div>
            </button>
          </div>
        </section>
        <section className='flex lg:w-7/12 w-10/12 mb-8 lg:mb-0 flex-wrap  items-center justify-between '>
          <div>
            <h2 className='text-[1.2rem] font-bold mb-8'>About Us</h2>
            <ul className='text-[.8rem]'>
              <li className='mb-4'>Career</li>
              <li className='mb-4'>Our Store</li>
              <li className='mb-4'>Our Cares</li>
              <li className='mb-4'>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h2 className='text-[1.2rem] font-bold mb-8'>Customar Care</h2>
            <ul className='text-[.8rem]'>
              <li className='mb-4'>Help Center</li>
              <li className='mb-4'>How to Buy</li>
              <li className='mb-4'>Track Your Order</li>
              <li className='mb-4'>Return and Refunds</li>
            </ul>
          </div>
          <div>
            <h2 className='text-[1.2rem] font-bold my-4'>Contract Us</h2>
            <p className='text-[.8rem]'>
              Nikunjo-2, Road Number-1, Khilkhet, Dhaka, Bangladesh
            </p>
            <div className='flex my-4'>
              <span className='mr-4'>
                <Icons name={'Mail'} />
              </span>
              <p className='text-[.8rem]'>kobir.h.ritu@gmail.com</p>
            </div>
            <div className='flex mb-4'>
              <span className='mr-4'>
                <Icons name={'Phone'} />
              </span>
              <p className='text-[.8rem]'>+8801746668064</p>
            </div>

            <div className='flex justify-between w-[60%] mt-10'>
              <span className='bg-[#2E4C6D] p-4 rounded-full mr-2'>
                <Icons name={'Fb'} />
              </span>
              <span className='bg-[#2E4C6D] p-4 rounded-full mx-2'>
                <Icons name={'Insta'} />
              </span>
              <span className='bg-[#2E4C6D] p-4 rounded-full mx-2'>
                <Icons name={'Twee'} />
              </span>
              <span className='bg-[#2E4C6D] p-4 rounded-full mx-2'>
                <Icons name={'Ytb'} />
              </span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Footer;
