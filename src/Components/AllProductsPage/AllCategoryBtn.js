import React from 'react';

const AllCategoryBtn = ({ selectedCategory, setSelectedCategory }) => {
  console.log(selectedCategory);
  return (
    <div className='mt-20 flex flex-wrap lg:justify-between justify-center items-center'>
      <button
        className={
          selectedCategory === 'products'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('products')}
      >
        All Products
      </button>
      <button
        className={
          selectedCategory === 'products'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('products')}
      >
        Fashion
      </button>
      <button
        className={
          selectedCategory === 'products'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('products')}
      >
        Men
      </button>
      <button
        className={
          selectedCategory === 'products'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('products')}
      >
        Women
      </button>
      <button
        className={
          selectedCategory === 'products/category/jewelery'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('products/category/jewelery')}
      >
        Jewelery
      </button>
      <button
        className={
          selectedCategory === 'products/category/electronics'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() => setSelectedCategory('products/category/electronics')}
      >
        Electronics
      </button>
    </div>
  );
};

export default AllCategoryBtn;
