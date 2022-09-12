import React from 'react';
import NavBar from '../LandingPage/Header/NavBar/NavBar';
import Footer from '../LandingPage/Footer/Footer';
import { Link } from 'react-router-dom';
import Icons from '../UI/Icons';
const LogInPage = () => {
  return (
    <section>
      <NavBar />

      <section className='mt-20 w-full lg:w-6/12 mx-auto bg-white p-8 rounded-md shadow'>
        <div className='text-center'>
          <h1 className='text-[1.5rem] mb-6'>Welcome to Ecommerce</h1>
          <p className='text-[.9rem] text-gray mx-4'>
            Please Log in with your email and password if you have an account
          </p>
        </div>
        <form className='flex flex-col mt-20 items-start w-11/12 mx-auto'>
          <label className='ml-[.2rem] text-gray text-[.7rem] mb-1'>
            Email or Phone Number
          </label>
          <input
            className='w-full h-[3rem] mb-6 pl-4 rounded-md border-[.5px] border-lightGray'
            type='text'
            placeholder='Exmple@email.com'
          />
          <label className='ml-[.2rem] text-gray text-[.7rem] mb-1'>
            Password
          </label>
          <input
            className='w-full h-[3rem] mb-6 pl-4 rounded-md border-[.5px] border-lightGray'
            type='password'
            placeholder='******'
          />
          <button className='w-full bg-red h-[2.5rem] rounded-md text-white'>
            Login
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
            Don't have and account?
            <Link to='signup'>
              <span className='border-b border-lightGray pb-1 hover:text-red  mx-2'>
                Sign Up
              </span>
            </Link>
          </p>
          <p className='text-gray mb-6 text-[.8rem]'>
            Forgot your password?{' '}
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

export default LogInPage;
