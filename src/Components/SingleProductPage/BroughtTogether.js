import React, { useState, useEffect, useContext } from 'react';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Store/context';
const BroughtTogether = () => {
  const [product, setProduct] = useState([]);
  const ctx = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    let isMount = true;
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products?limit=4`);
      const data = await response.json();
      console.log(data);
      if (isMount) {
        const finalData = data.map((item) => ({
          title: item.title.slice(0, 15),
          price: item.price,
          img: item.image,
          id: v4(),
          params: item.id,
        }));
        console.log(finalData);
        setProduct(finalData);
      }
    };
    getProduct();
    return () => {
      isMount = false;
    };
  }, []);
  const addItemHandler = ([product]) => {
    ctx.addItems({
      title: 'Discount Bundle',
      price: 400,
      qntt: 1,
      id: product.id,
      img: product.img,
    });
  };
  return (
    <section className='mt-20'>
      <div className='mb-10'>
        <h2 className='text-[1.5rem] font-medium lg:text-left text-center '>
          Frequently Brought Together
        </h2>
      </div>
      <div className='flex justify-center lg:flex-row flex-col lg:justify-between items-center gap-6'>
        <div className='flex flex-wrap items-center justify-center lg:justify-between  lg:w-8/12 w-11/12 gap-8 lg:gap-0'>
          {product.map((item) => (
            <div
              onClick={() => {
                navigate(`/single-product/${item.params}`);
              }}
              key={item.id}
              className='hover:shadow-2xl cursor-pointer flex flex-col items-center justify-evenly rounded-xl shadow bg-white w-8/12 lg:w-[12rem] h-[16rem]'
            >
              <div className='w-[70%] h-[8rem]'>
                <img className='w-full h-full' src={item.img} alt='' />
              </div>
              <div>
                <h3>{item.title}...</h3>
                <h3 className='mt-2'>
                  <span className='text-red font-medium'>${item.price}</span>
                  <span className='text-gray ml-2 line-through'>$200</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div>
          <span className='text-[2rem]'>=</span>
        </div>
        <div className='flex flex-col items-center justify-center border-[1px] border-lightGray rounded-xl w-11/12 lg:w-4/12 h-[16rem]'>
          <h2 className='text-red text-[2rem] font-bold'>$400.00</h2>
          <p className='text-red font-bold'>Save $500.00</p>
          <div className='mt-6'>
            <button
              className='text-white bg-red w-[8rem] h-[2.5rem] rounded hover:shadow-xl hover:bg-[#E94560]'
              onClick={() => {
                addItemHandler(product);
              }}
            >
              Add to Cart
            </button>
            <button className=' w-[8rem] h-[2.5rem] rounded hover:shadow-xl ml-2 border-[1px] border-lightGray text-red'>
              Add to List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroughtTogether;
