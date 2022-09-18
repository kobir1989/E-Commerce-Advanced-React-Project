import React, { useEffect, useState } from 'react';
import SectionWrapper from '../../Utils/SectionWrapper';
import AllCategoryBtn from './AllCategoryBtn';
import ProductRenderBody from '../FetchFromAPI/ProductRenderBody';
import { v4 } from 'uuid';
const AllProducts = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    'https://api.escuelajs.co/api/v1/categories/1/products'
  );
  console.log(selectedCategory);
  useEffect(() => {
    let isMount = true;
    const getData = async () => {
      const response = await fetch(`${selectedCategory}`);
      const data = await response.json();
      if (isMount) {
        const finalData = data.map((item) => ({
          title: item.title.slice(0, 25),
          price: item.price,
          img: item.images[1],
          id: v4(),
        }));
        setAllProduct(finalData);
      }
    };
    getData();
    return () => {
      isMount = false;
    };
  }, [selectedCategory]);
  return (
    <>
      <SectionWrapper>
        <AllCategoryBtn
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </SectionWrapper>
      <SectionWrapper>
        <ProductRenderBody product={allProduct} />
      </SectionWrapper>
    </>
  );
};

export default AllProducts;
