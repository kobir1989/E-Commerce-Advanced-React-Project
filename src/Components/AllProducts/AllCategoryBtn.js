import React from 'react';

const AllCategoryBtn = ({ selectedCategory, setSelectedCategory }) => {
  console.log(selectedCategory);
  return (
    <div className='mt-20 flex flex-wrap lg:justify-between justify-center items-center'>
      <button
        className={
          selectedCategory ===
          'https://api.escuelajs.co/api/v1/categories/1/products'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() =>
          setSelectedCategory(
            'https://api.escuelajs.co/api/v1/categories/1/products'
          )
        }
      >
        All Products
      </button>
      <button
        className={
          selectedCategory ===
          'https://api.escuelajs.co/api/v1/categories/2/products'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() =>
          setSelectedCategory(
            'https://api.escuelajs.co/api/v1/categories/2/products'
          )
        }
      >
        Smart Watches
      </button>
      <button
        className={
          selectedCategory ===
          'https://api.escuelajs.co/api/v1/categories/3/products'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() =>
          setSelectedCategory(
            'https://api.escuelajs.co/api/v1/categories/3/products'
          )
        }
      >
        Furniture
      </button>
      <button
        className={
          selectedCategory ===
          'https://api.escuelajs.co/api/v1/categories/4/products'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() =>
          setSelectedCategory(
            'https://api.escuelajs.co/api/v1/categories/4/products'
          )
        }
      >
        Shoes
      </button>
      <button
        className={
          selectedCategory ===
          'https://api.escuelajs.co/api/v1/categories/5/products'
            ? 'bg-red text-white mb-4 mx-2 lg:mb-0 w-[12rem]  h-[2.5rem] font-medium '
            : 'mb-4 mx-2 lg:mb-0 w-[12rem] border-[1px] border-red  h-[2.5rem] font-medium hover:bg-red hover:text-white'
        }
        onClick={() =>
          setSelectedCategory(
            'https://api.escuelajs.co/api/v1/categories/5/products'
          )
        }
      >
        Jewelery
      </button>
    </div>
  );
};

export default AllCategoryBtn;
