import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import BestSellerItems from './BestSellerItems';
import BtnShopNow from '../../UI/BtnShopNow';
const BestSeller = () => {
  const [product, setProduct] = useState([]);
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
    setProduct(finalData);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section className='w-8/12 mx-auto  mt-20'>
      <div className='text-center mb-8'>
        <h2 className='text-[2.5rem]'>Best Seller</h2>
      </div>
      <BestSellerItems product={product} />
      <div className='flex items-center justify-center'>
        <BtnShopNow btnName={'Browse More'} />
      </div>
    </section>
  );
};

export default BestSeller;
