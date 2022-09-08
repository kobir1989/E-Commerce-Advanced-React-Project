import React from 'react';
const smIcons = [
  {
    id: 'A1',
    imgUrl: require('../../../Assets/sm-icon.png'),
    title: 'Fast Delivery',
    subTitle: 'Start from $10',
  },
  {
    id: 'A2',
    imgUrl: require('../../../Assets/sm-icon2.png'),
    title: 'Money Guarantee',
    subTitle: '7 Days Back',
  },
  {
    id: 'A3',
    imgUrl: require('../../../Assets/sm-icon3.png'),
    title: '365 Days',
    subTitle: 'For free return',
  },
  {
    id: 'A4',
    imgUrl: require('../../../Assets/sm-icon4.png'),
    title: 'Payment',
    subTitle: 'Secure system',
  },
];
const InfoBanner = () => {
  return (
    <section className='mt-20'>
      <div className='px-8 bg-white 3xl:w-8/12 w-11/12 mx-auto lg:h-[8rem] h-[25rem] flex lg:flex-row justify-between flex-col lg:items-center items-start '>
        {smIcons.map((item) => (
          <div className='flex my-4' key={item.id}>
            <div className='w-[4rem]'>
              <img src={item.imgUrl} alt='' />
            </div>
            <div className='mx-4 lg:mx-0'>
              <h2>{item.title}</h2>
              <p className='text-gray'>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoBanner;
