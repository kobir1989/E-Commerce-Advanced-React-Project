import React from 'react';
import { v4 } from 'uuid';
import './Banner.css';

const itemsImg = [
  {
    id: v4(),
    imgUrl: require('../../../Assets/bag2.png'),
    title: 'Ladies Bag',
  },
  {
    id: v4(),
    imgUrl: require('../../../Assets/nike1.png'),
    title: 'Nike Shoes',
  },
  {
    id: v4(),
    imgUrl: require('../../../Assets/watch2.png'),
    title: 'Smart Watch',
  },
  {
    id: v4(),
    imgUrl: require('../../../Assets/women1.png'),

    title: 'Fashion',
  },
  {
    id: v4(),
    imgUrl: require('../../../Assets/women-shoes.png'),
    title: 'Ladies Shoes',
  },
];
const CategoryBanner = () => {
  return (
    <section className='3xl:w-8/12 w-11/12 mt-20 mx-auto bg-white p-4'>
      <div className=' lg:justify-between justify-center items-center flex flex-wrap  '>
        {itemsImg.map((item) => (
          <div className='lg:w-[10rem] w-[14rem] lg:h-[14rem] h-[16rem] relative  mx-2 lg:mx-0 banner'>
            <div>
              <img
                className='w-full h-[14rem] rounded'
                src={item.imgUrl}
                alt=''
              />
            </div>
            <div className='absolute bottom-[25%] left-[0%] flex bg-[#d0ced36e] w-full p-2 hover:bg-[#4946486e]'>
              <p className='text-white text-[1.2rem] ml-2 font-bold'>
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryBanner;
