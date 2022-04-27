import bcrypt from 'bcrypt';

const Data = {
  users: [
    {
      name: "Bhoomika sahu",
      email: "bhoomika@gmail.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: true
    },
    {
      name: "Reet",
      email: "reet@gmail.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: false
    }
  ],
  products: [
    {
      img: "./img/img1.jpeg",
      name: "Chocolate Cake",
      rating: "1",
      reviews: 24,
      price: "100",
      description: "Chocolate mud cupcakes",
      countInStock: 10,
    },
    {
      img: "./img/img2.jpeg",
      name: "Coffee Cake",
      rating: "2",
      reviews: 24,
      price: "1000",
      description: "Chocolate mud cupcakes",
      countInStock: 100,
    },
    {
      img: "./img/img3.jpeg",
      name: "Banana Cake",
      rating: "3",
      reviews: 23,
      price: "100",
      description: "Chocolate mud cupcakes",
      countInStock: 10,
    },
    {
      img: "./img/img4.jpeg",
      name: "Funfetti Cake",
      rating: "4",
      reviews: 5,
      price: "110",
      description: "Chocolate mud cupcakes",
      countInStock: 10,
    },
    {
      img: "./img/img5.jpeg",
      name: "Lemon Cake",
      rating: "2.5",
      reviews: 12,
      price: "100",
      description: "Chocolate mud cupcakes",
      countInStock: 10,
    },
    {
      img: "./img/img6.jpeg",
      name: "Black Forest Cake",
      rating: "3.5",
      reviews: 6,
      price: "100",
      description: "Chocolate mud cupcakes",
      countInStock: 10,
    },
    {
      img: "./img/img7.jpeg",
      name: "Cheese Cake",
      rating: "5",
      reviews: 10,
      price: "100",
      description: "Chocolate mud cupcakes",
      countInStock: 10,
    },
    {
      img: "./img/img8.jpeg",
      name: "Vanilla Cake",
      rating: "1.5",
      reviews: 9,
      price: "100",
      description: "Chocolate mud cupcakes",
      countInStock: 10,
    },
    {
      img: "./img/img9.jpeg",
      name: "Red Velvet Cake",
      rating: "1.5",
      reviews: 9,
      price: "100",
      description: "Chocolate mud cupcakes",
      countInStock: 10,
    },
    {
      img: "./img/img10.jpeg",
      name: "Mango Cake",
      rating: "1.5",
      reviews: 9,
      price: "100",
      description: "Chocolate mud cupcakes",
      countInStock: 10,
    },
    {
      img: "./img/img11.jpeg",
      name: "Sponge Cake",
      rating: "1.5",
      reviews: 9,
      price: "100",
      description: "Chocolate mud cupcakes",
      countInStock: 10,
    },
  ],
};
export default Data;

// import img1 from './img/img1.jpeg'
// import img2 from './img/img2.jpeg'
// import img3 from './img/img3.jpeg'
// import img4 from './img/img4.jpeg'
// import img5 from './img/img5.jpeg'
// import img6 from './img/img6.jpeg'
// import img7 from './img/img7.jpeg'
// import img8 from './img/img8.jpeg'
// import img9 from './img/img9.jpeg'
// import img10 from './img/img10.jpeg'
// import img11 from './img/img11.jpeg'

// const Data = [
//     {
//         id: 1,
//         img: img1,
//         name: 'Chocolate Cake',
//         rating: '1',
//         reviews: 24,
//         price: '100',
// description: "Chocolate mud cupcakes";
//     },
//     {
//         id: 2,
//         img: img2,
//         name: 'Chocolate Cake',
//         rating: '2',
//         reviews: 24,
//         price: '1000'
//     },
//     {
//         id: 3,
//         img: img3,
//         name: 'Chocolate Cake',
//         rating: '3',
//         reviews: 23,
//         price: '100',
// description: "Chocolate mud cupcakes";
//     },
//     {
//         id: 4,
//         img: img4,
//         name: 'Chocolate Cake',
//         rating: '4',
//         reviews: 5,
//         price: '110'
//     },
//     {
//         id: 5,
//         img: img5,
//         name: 'Chocolate Cake',
//         rating: '2.5',
//         reviews: 12,
//         price: '100',
// description: "Chocolate mud cupcakes";
//     },
//     {
//         id: 6,
//         img: img6,
//         name: 'Chocolate Cake',
//         rating: '3.5',
//         reviews: 6,
//         price: '100',
// description: "Chocolate mud cupcakes";
//     },
//     {
//         id: 7,
//         img: img7,
//         name: 'Chocolate Cake',
//         rating: '5',
//         reviews: 10,
//         price: '100',
// description: "Chocolate mud cupcakes";
//     },
//     {
//         id: 8,
//         img: img8,
//         name: 'Chocolate Cake',
//         rating: '1.5',
//         reviews: 9,
//         price: '100',
// description: "Chocolate mud cupcakes";
//     },
//     {
//         id: 9,
//         img: img9,
//         name: 'Chocolate Cake',
//         rating: '1.5',
//         reviews: 9,
//         price: '100',
// description: "Chocolate mud cupcakes";
//     },
//     {
//         id: 10,
//         img: img10,
//         name: 'Chocolate Cake',
//         rating: '1.5',
//         reviews: 9,
//         price: '100',
// description: "Chocolate mud cupcakes";
//     },
//     {
//         id: 11,
//         img: img11,
//         name: 'Chocolate Cake',
//         rating: '1.5',
//         reviews: 9,
//         price: '100',
// description: "Chocolate mud cupcakes";
//     }
// ]

// export default Data;
