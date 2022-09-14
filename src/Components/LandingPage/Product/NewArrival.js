import React, { useState, useEffect } from 'react';
import NewArrivalItems from './NewArrivalItems';
import BtnShopNow from '../../UI/BtnShopNow';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const NewArrival = () => {
  const [jwProduct, setJwProduct] = useState([]);
  const getProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=8');
    const data = await response.json();
    const finalData = data.map((item) => ({
      title: item.title.slice(0, 25),
      price: item.price,
      img: item.image,
      id: v4(),
    }));
    console.log(finalData);
    setJwProduct(finalData);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section className='3xl:w-8/12 lg:w-11/12 w-full mx-auto mt-20'>
      <div className='text-center mb-8'>
        <h2 className='text-[2.5rem]'>New Arrival</h2>
      </div>
      <NewArrivalItems jwProduct={jwProduct} />
      <div className='flex items-center justify-center'>
        <Link to='/products'>
          <BtnShopNow btnName={'Browse More'} />
        </Link>
      </div>
    </section>
  );
};

export default NewArrival;
