import React from 'react';
import { useContext } from 'react';
import { WishContext } from '../../Store/context';
import { Link } from 'react-router-dom';
import Modal from '../../Utils/Modal';
import Icons from '../../Utils/Icons';
import Button from '../../Utils/Button';
const WishListPopUp = ({ onCloseWishList }) => {
  const wishCtx = useContext(WishContext);
  console.log(wishCtx.wishList);
  return (
    <Modal onClose={onCloseWishList}>
      <div className=' lg:w-[25vw] overflow-y-scroll w-[80vw] h-[80vh]'>
        <div className='flex items-center gap-4'>
          <h2 className='text-[1.5rem] font-medium'>Wish List</h2>
          <span className='text-red'>
            <Icons name={'Heart'} />
          </span>
        </div>
        <div className='absolute top-6 right-6 text-red text-[1.2rem]'>
          <button onClick={onCloseWishList}>
            <Icons name={'Cross'} />
          </button>
        </div>
        <div className='lg:p-8 p-1'>
          {wishCtx.wishList.map((item) => (
            <Link to=''>
              <div
                key={item.id}
                className='mb-4 relative border-[.2px] rounded-3xl border-[#EAF6F6]
                 relative flex justify-between items-center p-4 h-[12rem]'
              >
                {/* <div
                  className='border-doted border-white  w-[6rem] h-[3rem] bg-red text-white
                 flex items-center justify-center
                absolute top-0 right-[25%]'
                >
                  <p>On Sale</p>
                </div> */}
                <div className='w-[6rem] h-[8rem]'>
                  <img className='w-full h-full' src={item.img} alt='' />
                </div>
                <div>
                  <h2 className='text-[1.2rem] text-gray'>{item.title}</h2>
                  <h2 className='text-red text-[1.5rem]'>${item.price}</h2>
                  <p className='text-gray text-[.9rem]'>
                    available in the stock
                  </p>
                </div>
                <div className='absolute right-0 bottom-0'>
                  <Button />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default WishListPopUp;
