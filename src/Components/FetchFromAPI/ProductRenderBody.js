import React, { useContext } from 'react';
import Card from '../../Utils/Card';
import { Context } from '../../Store/context';
import Button from '../../Utils/Button';
import Ratings from '../../Utils/Ratings';
import { useNavigate } from 'react-router-dom';
const ProductRenderBody = ({ product }) => {
  const navigate = useNavigate();
  const ctx = useContext(Context);
  const addItemHandler = (item) => {
    console.log(console.log(item));
    ctx.addItems({
      title: item.title,
      price: item.price,
      id: item.id,
      img: item.img,
      qntt: 1,
    });
  };
  return (
    <div className='flex flex-wrap gap-6 gap-y-20 justify-evenly items-center'>
      {product.map((item) => (
        <Card
          key={item.id}
          id={item.params}
          title={item.title}
          price={item.price}
          img={item.img}
          navigate={() => {
            navigate(`/single-product/${item.params}`);
          }}
        >
          <div className='pl-4 text-[#E8BD0D]'>
            <Ratings />
          </div>
          <div>
            <Button
              onClick={() => {
                addItemHandler(item);
              }}
            ></Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductRenderBody;
