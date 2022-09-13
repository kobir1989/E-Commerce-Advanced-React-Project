import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import BestSellerItems from './BestSellerItems';
import BtnShopNow from '../../UI/BtnShopNow';
import { Link } from 'react-router-dom';
import fetchFromAPI from '../../UI/fetchFromAPI';
const BestSeller = () => {
  const [product, setProduct] = useState([]);
  fetchFromAPI('products?limit=8').then((data) => {
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
    <section className='3xl:w-8/12 lg:W-11/12 w-full mx-auto  mt-20'>
      <div className='text-center mb-8'>
        <h2 className='text-[2.5rem]'>Best Seller</h2>
      </div>
      <BestSellerItems product={product} />
      <div className='flex items-center justify-center'>
        <Link to='/products'>
          <BtnShopNow btnName={'Browse More'} />
        </Link>
      </div>
    </section>
  );
};

export default BestSeller;
