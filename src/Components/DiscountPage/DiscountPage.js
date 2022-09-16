import React, { useState, useContext, useEffect } from 'react';
import NavBar from '../LandingPage/Header/NavBar/NavBar';
import Footer from '../LandingPage/Footer/Footer';
import DiscountPoster from './DiscountPoster';
import Icons from '../UI/Icons';
import Ratings from '../UI/Ratings';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Store/context';
import { v4 } from 'uuid';
import Cart from '../LandingPage/Cart/Cart';
const DiscountPage = () => {
  const [product, setProduct] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const ctx = useContext(Context);
  const navigate = useNavigate();
  const showCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(!showCart);
  };
  useEffect(() => {
    let isMount = true;
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      console.log(data);
      if (isMount) {
        const finalData = data.map((item) => ({
          title: item.title.slice(0, 25),
          price: item.price,
          img: item.image,
          id: v4(),
          params: item.id,
        }));
        console.log(finalData);
        setProduct(finalData);
      }
    };
    getProduct();
    return () => {
      isMount = false;
    };
  }, []);
  const addItemHandler = (item) => {
    ctx.addItems({
      title: item.title,
      price: item.price,
      id: item.id,
      img: item.img,
      qntt: 1,
    });
  };
  return (
    <>
      <header>
        <NavBar onShowCart={showCartHandler} />
        {showCart && <Cart onCloseCart={closeCartHandler} />}
      </header>
      <main>
        <DiscountPoster />
        <section className='3xl:w-8/12 w-11/12 mx-auto mt-[4rem] lg:mt-[10rem]'>
          <div className=' w-full flex flex-wrap items-center lg:justify-between justify-center gap-12'>
            {product.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  navigate(`/single-product/${item.params}`);
                }}
                className='relative cursor-pointer hover:shadow-2xl rounded-xl flex flex-col items-center justify-between p-4 bg-white w-10/12 lg:w-[16rem] h-[22rem]'
              >
                <div className='bg-red w-[4.5rem] h-[2rem] rounded-2xl absolute left-2 flex justify-center items-center'>
                  <p className='text-white font-meduim text-[1rem]'>15% off</p>
                </div>
                <div className='w-[8rem] h-[10rem]'>
                  <img className='w-full h-full' src={item.img} alt='' />
                </div>
                <div className='w-full flex flex-col items-start '>
                  <h3 className='mb-4'>{item.title}</h3>
                  <span className='text-[#FECD70] '>
                    <Ratings />
                  </span>
                  <div className='mt-4 flex justify-between items-center w-full'>
                    <h3 className=''>
                      <span className='text-red font-medium'>
                        ${item.price}
                      </span>
                      <span className='text-gray ml-2 line-through'>$200</span>
                    </h3>
                    <div>
                      <button
                        className=' flex justify-center items-center w-[2rem] h-[2rem] border-[1px] border-[#FFC4C4] hover:border-red rounded'
                        onClick={() => {
                          addItemHandler(item);
                        }}
                      >
                        <span className='text-red'>
                          <Icons name={'Plus'} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DiscountPage;
