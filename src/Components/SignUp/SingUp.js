import React from 'react';
import NavBar from '../LandingPage/Header/NavBar/NavBar';
import Footer from '../LandingPage/Footer/Footer';
import { Link } from 'react-router-dom';
import Icons from '../UI/Icons';
const SingUp = () => {
  return (
    <section>
      <NavBar />
      <section className='mt-20 w-full lg:w-6/12 mx-auto bg-white p-8 rounded-md shadow'>
        <div className='text-center'>
          <h1 className='text-[1.5rem] mb-6'>Create Your Account</h1>
          <p className='text-[.9rem] text-gray mx-4'>
            Please fill all the fields to Continue
          </p>
        </div>
        <form className='flex flex-col mt-20 items-start w-11/12 mx-auto'>
          <label
            htmlFor='name'
            className='ml-[.2rem] text-gray text-[.7rem] mb-1'
          >
            Full Name
          </label>
          <input
            name='name'
            className='w-full h-[3rem] mb-6 pl-4 rounded-md border-[.5px] border-lightGray'
            type='text'
            placeholder='Kabir Hossain'
          />
          <label
            htmlFor='email'
            className='ml-[.2rem] text-gray text-[.7rem] mb-1'
          >
            Email or Phone Number
          </label>
          <input
            className='w-full h-[3rem] mb-6 pl-4 rounded-md border-[.5px] border-lightGray'
            type='text'
            name='email'
            placeholder='Exmple@email.com'
          />
          <label
            htmlFor='confirm-email'
            className='ml-[.2rem] text-gray text-[.7rem] mb-1'
          >
            Confirm Email or Phone Number
          </label>
          <input
            className='w-full h-[3rem] mb-6 pl-4 rounded-md border-[.5px] border-lightGray'
            type='text'
            name='confirm-email'
            placeholder='Exmple@email.com'
          />
          <label
            htmlFor='password'
            className='ml-[.2rem] text-gray text-[.7rem] mb-1'
          >
            Password
          </label>
          <input
            className='w-full h-[3rem] mb-6 pl-4 rounded-md border-[.5px] border-lightGray'
            type='password'
            name='password'
            placeholder='******'
          />
          <label
            htmlFor='confirm-password'
            className='ml-[.2rem] text-gray text-[.7rem] mb-1'
          >
            Retype Password
          </label>
          <input
            className='w-full h-[3rem] mb-6 pl-4 rounded-md border-[.5px] border-lightGray'
            type='password'
            name='confirm-password'
            placeholder='******'
          />
          <div className='mb-6 '>
            <input className='mr-2' type='checkbox' name='tarms' />
            <label
              htmlFor='checkbox'
              className='ml-[.2rem] text-gray text-[.9rem] mb-1'
            >
              By signing up, you agree to our Terms & conditions.
            </label>
          </div>
          <button className='w-full bg-red h-[2.5rem] rounded-md text-white'>
            Create Account
          </button>
        </form>
        <div className='flex flex-col items-center mt-10 w-11/12 mx-auto'>
          <span className='mb-2'>or</span>
          <button className='text-[.9rem] w-full bg-[#277BC0] h-[2.5rem] rounded-md text-white  mb-4 flex items-center justify-center'>
            <sapan className='mr-4'>
              <Icons name={'Fb'} />
            </sapan>
            Continue With Facebook
          </button>
          <button className='text-[.9rem] w-full bg-[#3AB4F2] h-[2.5rem] rounded-md text-white mb-4 flex items-center justify-center'>
            <sapan className='mr-4'>
              <Icons name={'Ggl'} />
            </sapan>
            Continue with Google
          </button>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <p className='text-gray mb-6 text-[.8rem]'>
            Already a member?
            <Link to='login'>
              <span className='border-b border-lightGray pb-1 hover:text-red  mx-2'>
                Login
              </span>
            </Link>
          </p>
          <p className='text-gray mb-6 text-[.8rem]'>
            Forgot your password?
            <span className='border-b border-lightGray pb-1 hover:text-red mx-2'>
              Reset password
            </span>
          </p>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default SingUp;
