import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import BtnShopNow from '../../UI/BtnShopNow';
import DealsOfTheDayItems from './DealsOfTheDayItems';
import { Link } from 'react-router-dom';
import fetchFromAPI from '../../UI/fetchFromAPI';
const DealsOfTheDay = () => {
  const [product, setProduct] = useState([]);
  fetchFromAPI('?limit=4').then((data) => {
    const finalData = data.map((item) => ({
      title: item.title.slice(0, 25),
      price: item.price,
      img: item.image,
      id: v4(),
    }));

    setProduct(finalData);
  });

  useEffect(() => {
    fetchFromAPI();
  }, []);
  return (
    <section className='mt-20 3xl:w-8/12 lg:w-11/12 w-full mx-auto'>
      <div className='text-center text-[2.5rem] mb-8'>
        <h2>Deals Of The Day</h2>
      </div>
      <DealsOfTheDayItems product={product} />
      <div className='flex items-center justify-center'>
        <Link to='/products'>
          <BtnShopNow btnName={'Browse More'} />
        </Link>
      </div>
    </section>
  );
};

export default DealsOfTheDay;
