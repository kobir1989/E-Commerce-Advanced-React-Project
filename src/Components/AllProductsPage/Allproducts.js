import React, { useEffect, useState } from 'react';
import Footer from '../LandingPage/Footer/Footer';
import NavBar from '../LandingPage/Header/NavBar/NavBar';
import fetchFromAPI from '../UI/fetchFromAPI';
import AllCategoryBtn from './AllCategoryBtn';
import AllProductsItems from './AllProductsItems';
import { v4 } from 'uuid';
const Allproducts = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('products');
  console.log(selectedCategory);
  useEffect(() => {
    let isMounted = true;

    fetchFromAPI(`${selectedCategory}`).then((data) => {
      console.log(data);
      if (isMounted) {
        const finalData = data.map((item) => ({
          title: item.title.slice(0, 25),
          price: item.price,
          img: item.image,
          id: v4(),
        }));
        setAllProduct(finalData);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [selectedCategory]);

  return (
    <section>
      <NavBar />
      <section className='3xl:w-8/12 lg:W-11/12 w-full mx-auto  mt-20'>
        <AllCategoryBtn
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AllProductsItems allProduct={allProduct} />
      </section>
      <Footer />
    </section>
  );
};

export default Allproducts;
