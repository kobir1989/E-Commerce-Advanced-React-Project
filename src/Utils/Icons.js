import React from 'react';
import {
  FaChevronRight,
  FaChevronLeft,
  FaTh,
  FaChevronDown,
  FaSearch,
  FaRegUser,
  FaBars,
  FaPhoneAlt,
  FaRegEnvelope,
  FaHome,
  FaArrowRight,
  FaRegHeart,
  FaGooglePlay,
  FaApple,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGoogle,
} from 'react-icons/fa';
import { GiClothes, GiSonicShoes, GiHealthPotion } from 'react-icons/gi';
import {
  AiOutlineLaptop,
  AiOutlineMinus,
  AiOutlineGift,
  AiOutlineEye,
  AiOutlinePlus,
} from 'react-icons/ai';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';

const Icons = ({ name }) => {
  switch (name) {
    case 'ArrowDown':
      return <FaChevronDown />;
    case 'Category':
      return <FaTh />;
    case 'ArrowForward':
      return <FaChevronRight />;
    case 'Cloths':
      return <GiClothes />;
    case 'Laptop':
      return <AiOutlineLaptop />;
    case 'Gift':
      return <AiOutlineGift />;
    case 'Health':
      return <GiHealthPotion />;
    case 'Shoes':
      return <GiSonicShoes />;
    case 'Search':
      return <FaSearch />;
    case 'User':
      return <FaRegUser />;
    case 'Manue':
      return <FaBars />;
    case 'Phone':
      return <FaPhoneAlt />;
    case 'Mail':
      return <FaRegEnvelope />;
    case 'Cart':
      return <MdOutlineShoppingBag />;
    case 'Home':
      return <FaHome />;
    case 'ArrowBtn':
      return <FaArrowRight />;
    case 'ArrowLeft':
      return <FaChevronLeft />;
    case 'Heart':
      return <FaRegHeart />;
    case 'Eye':
      return <AiOutlineEye />;
    case 'Apple':
      return <FaApple />;
    case 'Google':
      return <FaGooglePlay />;
    case 'Fb':
      return <FaFacebookF />;
    case 'Insta':
      return <FaInstagram />;
    case 'Twee':
      return <FaTwitter />;
    case 'Ytb':
      return <FaYoutube />;
    case 'Cross':
      return <CgClose />;
    case 'Minus':
      return <AiOutlineMinus />;
    case 'Plus':
      return <AiOutlinePlus />;
    case 'Ggl':
      return <FaGoogle />;
    default:
  }
};

export default Icons;
