import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import BtnShopNow from '../../UI/BtnShopNow';
import DealsOfTheDayItems from './DealsOfTheDayItems';
const DealsOfTheDay = () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=4');
    const data = await response.json();

    const finalData = data.map((item) => ({
      title: item.title.slice(0, 25),
      id: v4(),
      price: item.price,
      img: item.image,
      rating: item.rating.rate,
      ratingCount: item.rating.count,
    }));
    setProduct(finalData);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section className='mt-20'>
      <div className='text-center text-[2.5rem] mb-8'>
        <h2>Deals Of The Day</h2>
      </div>
      <DealsOfTheDayItems product={product} />
      <div className='flex items-center justify-center'>
        <BtnShopNow btnName={'Browse More'} />
      </div>
    </section>
  );
};

export default DealsOfTheDay;
