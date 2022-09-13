import React from 'react';
import NavBar from '../LandingPage/Header/NavBar/NavBar';
import Footer from '../LandingPage/Footer/Footer';
import { Link } from 'react-router-dom';
import Icons from '../UI/Icons';
import useSignUp from './formHook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingUp = () => {
  // Full Name Validation Check

  const {
    value: fullName,
    isValid: nameInputIsValid,
    hasError: nameInputInvalid,
    inputChangeHandler: fullNameHandler,
    resetInputField: resetName,
    inputBlurHandler: fullNameBlurHandler,
  } = useSignUp((value) => value.trim() && value.length > 5);

  // Email Validation Check

  const {
    value: email,
    isValid: emailInputIsValid,
    hasError: emailInputInvalid,
    inputChangeHandler: emailHandler,
    resetInputField: resetEmail,
    inputBlurHandler: emailBlurHandler,
  } = useSignUp((value) => value.includes('@'));

  // password validation check

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordInvalid,
    inputChangeHandler: passwordHandler,
    resetInputField: resetPassword,
    inputBlurHandler: passwordBlurHandler,
  } = useSignUp((value) => value.length >= 6);

  // confirm-password validation check

  const {
    value: confirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordInvalid,
    inputChangeHandler: confirmPasswordHandler,
    resetInputField: resetConfirmPassword,
    inputBlurHandler: confirmPasswordBlurHandler,
  } = useSignUp((value) => value === password);

  let formIsValid = false;
  if (
    nameInputIsValid &&
    emailInputIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return toast.error(' Please fill all the fields to Continue');
    }
    console.log(fullName);
    toast.success('Account Created');
    resetName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };

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
        <form
          className='flex flex-col mt-20 items-start w-11/12 mx-auto'
          onSubmit={submitHandler}
        >
          <label
            htmlFor='name'
            className='text-gray ml-[.2rem] text-[.7rem] mb-1'
          >
            Full Name
          </label>
          <input
            id='name'
            className={
              nameInputInvalid
                ? 'outline-red w-full h-[3rem] mb-6 pl-4 rounded-md w-full h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-red'
                : 'outline-[#83BD75] w-full h-[3rem] mb-6 pl-4 rounded-md w-full h-[3rem] mb-6 pl-4 rounded-md border-[1px] border-lightGray'
            }
            placeholder='Kabir Hossain'
            onChange={fullNameHandler}
            value={fullName}
            onBlur={fullNameBlurHandler}
          />
          {nameInputInvalid && (
            <p className='text-[.8rem] text-red mt-[-1rem]'>
              Please Write your Full Name
            </p>
          )}
          <label
            htmlFor='email'
            className='ml-[.2rem] text-gray text-[.7rem] mb-1'
          >
            Email or Phone Number
          </label>
          <input
            className={
              emailInputInvalid
                ? 'outline-red w-full h-[3rem] mb-6 pl-4 rounded-md w-full h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-red'
                : 'outline-[#83BD75] w-full h-[3rem] mb-6 pl-4 rounded-md w-full h-[3rem] mb-6 pl-4 rounded-md border-[1px] border-lightGray'
            }
            type='email'
            id='email'
            placeholder='Exmple@email.com'
            onChange={emailHandler}
            onBlur={emailBlurHandler}
            value={email}
          />
          {emailInputInvalid && (
            <p className='text-[.8rem] text-red mt-[-1rem]'>
              Please Submit Valid Email
            </p>
          )}

          <label
            htmlFor='password'
            className='ml-[.2rem] text-gray text-[.7rem] mb-1'
          >
            Password
          </label>
          <input
            className={
              passwordInvalid
                ? 'outline-red w-full h-[3rem] mb-6 pl-4 rounded-md w-full h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-red'
                : 'outline-[#83BD75] w-full h-[3rem] mb-6 pl-4 rounded-md w-full h-[3rem] mb-6 pl-4 rounded-md border-[1px] border-lightGray'
            }
            type='password'
            id='password'
            placeholder='******'
            onChange={passwordHandler}
            value={password}
            onBlur={passwordBlurHandler}
          />
          {passwordInvalid && (
            <p className='text-[.8rem] text-red mt-[-1rem]'>
              Password should be minimum 6 characters
            </p>
          )}
          <label
            htmlFor='confirm-password'
            className='ml-[.2rem] text-gray text-[.7rem] mb-1'
          >
            Retype Password
          </label>
          <input
            className={
              confirmPasswordInvalid
                ? 'outline-red w-full h-[3rem] mb-6 pl-4 rounded-md w-full h-[3rem] mb-6 pl-4 rounded-md  border-[1px] border-red'
                : 'outline-[#83BD75] w-full h-[3rem] mb-6 pl-4 rounded-md w-full h-[3rem] mb-6 pl-4 rounded-md border-[1px] border-lightGray'
            }
            id='password-confirm'
            type='password'
            name='confirm-password'
            placeholder='******'
            onChange={confirmPasswordHandler}
            value={confirmPassword}
            onBlur={confirmPasswordBlurHandler}
          />
          {confirmPasswordInvalid && (
            <p className='text-[.8rem] text-red mt-[-1rem]'>
              Those passwords didn’t match. Try again.
            </p>
          )}
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
            <span className='mr-4'>
              <Icons name={'Fb'} />
            </span>
            Continue With Facebook
          </button>
          <button className='text-[.9rem] w-full bg-[#3AB4F2] h-[2.5rem] rounded-md text-white mb-4 flex items-center justify-center'>
            <span className='mr-4'>
              <Icons name={'Ggl'} />
            </span>
            Continue with Google
          </button>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <p className='text-gray mb-6 text-[.8rem]'>
            Already a member?
            <Link to='/login'>
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
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default SingUp;
