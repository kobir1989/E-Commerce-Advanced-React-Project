import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import ProductRenderBody from './ProductRenderBody';
const FetchProductsFromAPI = () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    const finalData = data.map((item) => ({
      title: item.title.slice(0, 22),
      price: item.price,
      img: item.image,
      id: v4(),
      params: item.id,
      description: item.description,
    }));
    setProduct(finalData);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className='flex items-center justify-center'>
        <ProductRenderBody product={product} />
      </div>
    </>
  );
};
export default FetchProductsFromAPI;
