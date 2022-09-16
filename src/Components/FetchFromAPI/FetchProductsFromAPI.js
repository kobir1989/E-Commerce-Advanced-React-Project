import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import ProductRenderBody from './ProductRenderBody';
import BtnShopNow from '../../Utils/BtnShopNow';
import { Link } from 'react-router-dom';

const FetchProductsFromAPI = () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=8');
    const data = await response.json();

    const finalData = data.map((item) => ({
      title: item.title.slice(0, 25),
      price: item.price,
      img: item.image,
      id: v4(),
      params: item.id,
    }));
    console.log(finalData);
    setProduct(finalData);
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(product, '26');
  return (
    <>
      <div className='flex items-center justify-center'>
        <ProductRenderBody product={product} />
      </div>
      <div className='flex items-center justify-center'>
        <Link to='/products'>
          <BtnShopNow btnName={'Browse More'} />
        </Link>
      </div>
    </>
  );
};

export default FetchProductsFromAPI;
