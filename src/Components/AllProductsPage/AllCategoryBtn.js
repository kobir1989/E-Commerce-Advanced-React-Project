import React from 'react';

const AllCategoryBtn = ({ selectedCategory, setSelectedCategory }) => {
  console.log(selectedCategory);
  return (
    <div className='mt-20 flex flex-wrap lg:justify-between justify-center items-center'>
      <button
        className={
          selectedCategory === ''
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('')}
      >
        All Products
      </button>
      <button
        className={
          selectedCategory === ''
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('')}
      >
        Fashion
      </button>
      <button
        className={
          selectedCategory === ''
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('')}
      >
        Men
      </button>
      <button
        className={
          selectedCategory === ''
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('')}
      >
        Women
      </button>
      <button
        className={
          selectedCategory === 'products/category/jewelery'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('category/jewelery')}
      >
        Jewelery
      </button>
      <button
        className={
          selectedCategory === 'category/electronics'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('category/electronics')}
      >
        Electronics
      </button>
    </div>
  );
};

export default AllCategoryBtn;
