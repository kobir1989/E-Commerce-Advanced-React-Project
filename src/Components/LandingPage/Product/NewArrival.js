import React, { useState, useEffect } from 'react';
import NewArrivalItems from './NewArrivalItems';
import BtnShopNow from '../../UI/BtnShopNow';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import fetchFromAPI from '../../UI/fetchFromAPI';
const NewArrival = () => {
  const [jwProduct, setJwProduct] = useState([]);
  fetchFromAPI('?limit=4').then((data) => {
    const finalData = data.map((item) => ({
      title: item.title.slice(0, 25),
      price: item.price,
      img: item.image,
      id: v4(),
    }));

    setJwProduct(finalData);
  });

  useEffect(() => {
    fetchFromAPI();
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
