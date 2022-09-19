import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import ProductRenderBody from './ProductRenderBody';
import Icons from '../../Utils/Icons';
const FetchProductsFromAPI = () => {
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMount = true;
    const getProduct = async () => {
      setIsError(null);
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=4'
        );
        if (!response.ok) {
          throw new Error(isError);
        }
        const data = await response.json();
        if (isMount) {
          const finalData = data.map((item) => ({
            title: item.title.slice(0, 22),
            price: item.price,
            img: item.image,
            id: v4(),
            params: item.id,
            description: item.description,
          }));
          setProduct(finalData);
        }
      } catch (error) {
        setIsError(error);
      }
      setIsLoading(false);
    };
    getProduct();
    return () => {
      isMount = false;
    };
  }, [isError]);
  return (
    <>
      <div className='flex items-center justify-center'>
        <ProductRenderBody product={product} />
        {isError && (
          <p className='text-red font-medium text-[1.1rem]'>
            Status 404 Something went wrong!
          </p>
        )}
        {isLoading && (
          <span className='animate-spin text-[4rem] text-red'>
            <Icons name={'Loader'} />
          </span>
        )}
      </div>
    </>
  );
};
export default FetchProductsFromAPI;
