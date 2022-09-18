import React, { useState, useEffect } from 'react';
import BroughtTogether from '../RelatedProducts/BroughtTogether';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import SingleProduct from './SingleProduct';
import SectionWrapper from '../../Utils/SectionWrapper';
import { useParams } from 'react-router-dom';
const ProductsDetails = () => {
  const [product, setProduct] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      let isMount = true;
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      if (isMount) {
        console.log(data);
        const finalData = {
          title: data.title.slice(11),
          img: data.image,
          description: data.description,
          price: data.price,
          key: data.id,
          rating: data.rating.count,
        };
        console.log(finalData);
        setProduct(finalData);
      }
      return () => {
        isMount = false;
      };
    };
    getProduct();
  }, [id]);
  return (
    <>
      <SingleProduct
        product={product}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
      <SectionWrapper>
        <BroughtTogether />
        <RelatedProducts />
      </SectionWrapper>
    </>
  );
};

export default ProductsDetails;
