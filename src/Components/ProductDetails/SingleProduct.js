import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Icons from '../../Utils/Icons';
import { Context } from '../../Store/context';
import Ratings from '../../Utils/Ratings';
import BroughtTogether from '../RelatedProducts/BroughtTogether';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import SectionWrapper from '../../Utils/SectionWrapper';
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const ctx = useContext(Context);
  const [qntt] = ctx.items;
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
  const addItemHandler = (item) => {
    setIsDisabled(false);
    ctx.addItems({
      title: item.title,
      price: item.price,
      id: item.id,
      img: item.img,
      qntt: 1,
    });
  };
  const removeItemHandler = (product) => {
    if (ctx.items.length === 0) {
      setIsDisabled(true);
      return;
    }
    ctx.removeItem(product.id);
  };
  return (
    <SectionWrapper>
      <div className='flex bg-white lg:p-20 p-8 rounded shadow lg:flex-row flex-col items-center justify-center'>
        <div className='lg:w-6/12 w-11/12 h-full'>
          <img className='w-[20rem] h-full' src={product.img} alt='' />
          <div className='flex py-6 gap-4'>
            <div className='border-[1px] border-red rounded-xl p-4'>
              <img className='w-[3rem] h-[3rem]' src={product.img} alt='' />
            </div>
            <div className='border-[1px] border-lightGray rounded-xl p-4'>
              <img className='w-[3rem] h-[3rem]' src={product.img} alt='' />
            </div>
            <div className='border-[1px] border-lightGray rounded-xl p-4'>
              <img className='w-[3rem] h-[3rem]' src={product.img} alt='' />
            </div>
          </div>
        </div>
        <div className='lg:w-6/12 w-11/12 flex flex-col justify-start items-start'>
          <h2 className='text-[1.5rem] mb-4'>{product.title}</h2>
          <p className='text-[1rem] mb-4'>{product.description}</p>
          <h2 className='text-[1rem] font-medium mb-4'>Brand: Brand Name</h2>
          <div className='flex items-center gap-2 mb-4 text-[#FECD70]'>
            <span className='text-gray'>Rated: </span>
            <Ratings />
            <span className='text-gray'>({product.rating})</span>
          </div>

          <h4 className='text-[1.5rem] text-red'>${product.price}</h4>
          <p className='text-[1rem] mb-8'>Stock Available</p>
          <div className='flex gap-6 mb-6'>
            <button
              className=' flex justify-center items-center w-[2.5rem] h-[2.5rem] border-[1px] border-[#FFC4C4] rounded'
              onClick={() => {
                addItemHandler(product);
              }}
            >
              <span className='text-red'>
                <Icons name={'Plus'} />
              </span>
            </button>
            <span className='my-2'>
              {ctx.items.length === 0 ? 0 : qntt.qntt}
            </span>

            <button
              className={
                isDisabled
                  ? 'flex justify-center items-center w-[2.5rem] h-[2.5rem] border-[1px] border-lightGray rounded'
                  : 'flex justify-center items-center w-[2.5rem] h-[2.5rem] border-[1px] border-[#FFC4C4] rounded'
              }
              onClick={() => {
                removeItemHandler(product);
              }}
              disabled={isDisabled ? true : false}
            >
              <span className={isDisabled ? 'text-gray' : 'text-red'}>
                <Icons name={'Minus'} />
              </span>
            </button>
          </div>
          <p className='text-[.8rem] mb-6 hover:text-red'>
            Sold by: Vendor Name
          </p>
          <button
            className='bg-red w-[10rem] h-[3rem] rounded shadow-xl text-white font-medium'
            onClick={() => {
              addItemHandler(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <BroughtTogether />
      <RelatedProducts />
    </SectionWrapper>
  );
};

export default SingleProduct;
