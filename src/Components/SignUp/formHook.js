import React, { useState } from 'react';
const useSignUp = (value) => {
  const [inputValue, setInputValue] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const valueIsValid = value(inputValue);
  const hasError = !valueIsValid && inputIsTouched;
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.length < 6) {
    }
    console.log(e.target.value);
  };
  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };
  const resetInputField = () => {
    setInputValue('');
    setInputIsTouched(false);
  };
  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    resetInputField,
    inputBlurHandler,
  };
};
export default useSignUp;
