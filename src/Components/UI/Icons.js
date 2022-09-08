import React from 'react';
import {
  FaChevronRight,
  FaChevronLeft,
  FaTh,
  FaChevronDown,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaPhoneAlt,
  FaRegEnvelope,
  FaHome,
  FaArrowRight,
  FaHeart,
  FaGooglePlay,
  FaApple,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { GiClothes, GiSonicShoes, GiHealthPotion } from 'react-icons/gi';
import { AiOutlineLaptop, AiOutlineGift, AiOutlineEye } from 'react-icons/ai';

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
      return <FaUser />;
    case 'Manue':
      return <FaBars />;
    case 'Phone':
      return <FaPhoneAlt />;
    case 'Mail':
      return <FaRegEnvelope />;
    case 'Cart':
      return <FaShoppingCart />;
    case 'Home':
      return <FaHome />;
    case 'ArrowBtn':
      return <FaArrowRight />;
    case 'ArrowLeft':
      return <FaChevronLeft />;
    case 'Heart':
      return <FaHeart />;
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
    default:
  }
};

export default Icons;
