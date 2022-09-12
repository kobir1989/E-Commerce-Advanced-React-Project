import React, { useState } from 'react';
const useSignUp = (value) => {
  const [inputValue, setInputValue] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(true);
  const valueIsValid = value(inputValue);
  const hasError = !valueIsValid && inputIsTouched;
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.length < 6) {
    }
    console.log(e.target.value);
  };
  const inputBlurHandler = () => {
    setInputIsTouched(false);
  };
  const resetInputField = () => {
    setInputValue('');
  };
  return {
    value: inputValue,
    isValid: hasError,
    inputChangeHandler,
    resetInputField,
    inputIsTouched,
    inputBlurHandler,
  };
};
export default useSignUp;
