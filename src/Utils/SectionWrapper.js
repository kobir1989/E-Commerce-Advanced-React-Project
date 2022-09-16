import React from 'react';
const SectionWrapper = (props) => {
  return (
    <section className='3xl:w-8/12 lg:W-11/12 w-full mx-auto mt-20'>
      {props.children}
    </section>
  );
};

export default SectionWrapper;
