import Modal from '../../Utils/Modal';
import { ModalContext } from '../../Store/context';
import React, { useContext } from 'react';
import Icons from '../../Utils/Icons';
import Ratings from '../../Utils/Ratings';
const ProductPopUp = () => {
  const modalCtx = useContext(ModalContext);
  console.log(modalCtx);
  return (
    <Modal onClose={modalCtx.hideProductHandler}>
      <div className='z-40 relative w-[40vw] h-[60vh]'>
        <button
          className='text-red text-[1.5rem] absolute right-6 top-6'
          onClick={modalCtx.hideProductHandler}
        >
          <Icons name={'Cross'} />
        </button>

        <div
          className='flex w-full h-full bg-white p-4 rounded shadow lg:flex-row
          flex-col items-center justify-between'
        >
          <div className='lg:w-5/12 w-11/12'>
            <img
              className='w-full lg:h-[20rem]'
              src={modalCtx.productModalData.img}
              alt=''
            />
            <div className='flex py-6 gap-4'>
              <div className='border-[1px] border-red rounded-xl p-4'>
                <img
                  className='w-[3rem] h-[3rem]'
                  src={modalCtx.productModalData.img}
                  alt=''
                />
              </div>
              <div className='border-[1px] border-lightGray rounded-xl p-4'>
                <img
                  className='w-[3rem] h-[3rem]'
                  src={modalCtx.productModalData.img}
                  alt=''
                />
              </div>
              <div className='border-[1px] border-lightGray rounded-xl p-4'>
                <img
                  className='w-[3rem] h-[3rem]'
                  src={modalCtx.productModalData.img}
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='lg:w-6/12 w-11/12 flex flex-col justify-start items-start'>
            <h2 className='text-[1.5rem] mb-4'>
              {modalCtx.productModalData.title}
            </h2>
            <p className='text-[1rem] mb-4'>
              {modalCtx.productModalData.description}
            </p>
            <h2 className='text-[1rem] font-medium mb-4'>Brand: Brand Name</h2>
            <div className='flex items-center gap-2 mb-4 text-[#FECD70]'>
              <span className='text-gray'>Rated: </span>
              <Ratings />
              <span className='text-gray'>
                ({modalCtx.productModalData.rating})
              </span>
            </div>

            <h4 className='text-[1.5rem] text-red'>
              ${modalCtx.productModalData.price}
            </h4>
            <p className='text-[1rem] mb-8'>Stock Available</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductPopUp;
