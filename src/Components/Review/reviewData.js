import { v4 } from 'uuid';
const review = [
  {
    name: 'John Mark',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nemo voluptatibus ut adipisci nulla nisi tempora reprehenderit iste eius consequatur?',
    imgUrl: require('../../Assets/person1.jpg'),
    id: v4(),
    time: '1 Month ago',
  },
  {
    name: 'Jayson Mathue',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nemo voluptatibus ut adipisci nulla nisi tempora reprehenderit iste eius consequatur?',
    imgUrl: require('../../Assets/person-2.jpg'),
    id: v4(),
    time: '4 Months ago',
  },
  {
    name: 'Jennifer lawrence',
    message:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nemo voluptatibus ut adipisci nulla nisi tempora reprehenderit iste eius consequatur?',
    imgUrl: require('../../Assets/women1.png'),
    id: v4(),
    time: '2 Months ago',
  },
];

export default review;
