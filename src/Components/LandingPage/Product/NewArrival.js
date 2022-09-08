import React, { useState, useEffect } from 'react';
import NewArrivalItems from './NewArrivalItems';
import BtnShopNow from '../../UI/BtnShopNow';
import { v4 } from 'uuid';
const NewArrival = () => {
  const [jwProduct, setJwProduct] = useState([]);
  const getProduct = async () => {
    const response = await fetch(
      'https://fakestoreapi.com/products/category/jewelery'
    );
    const data = await response.json();
    const finalJwData = data.map((item) => ({
      title: item.title.slice(0, 25),
      price: item.price,
      img: item.image,
      retingCount: item.rating,
      id: v4(),
    }));

    setJwProduct(finalJwData);
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
        <BtnShopNow btnName={'Browse More'} />
      </div>
    </section>
  );
};

export default NewArrival;
