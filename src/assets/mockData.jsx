const Categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Automotive",
];

export default Categories;

import { FaShippingFast } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";

const InfoSectionDetails = [
  {
    id: 1,
    icon: <FaShippingFast className="text-3xl text-red-600" />,
    title: "Free Shiping",
    description: "Get your orders delivered with no extra cost",
  },

  {
    id: 2,
    icon: <MdOutlineSupportAgent className="text-3xl text-red-600" />,
    title: "Support 24/7",
    description: "Get your orders delivered with no extra cost",
  },

  {
    id: 3,
    icon: <FaMoneyBill className="text-3xl text-red-600" />,
    title: "100% Money Back",
    description: "Full refund if you are not satisfied ",
  },

  {
    id: 4,
    icon: <MdOutlineSecurity className="text-3xl text-red-600" />,
    title: "Payment Secure",
    description: "Your payment information is safe with us",
  },

  {
    id: 5,
    icon: <MdDiscount className="text-3xl text-red-600" />,
    title: "Discount",
    description: "Enjoy the best prices on our products",
  },
];

// top product section

import Image1 from "../assets/images/Product1.png";
import Image2 from "../assets/images/Product2.jpg";
import Image3 from "../assets/images/Product3.jpg";
import Image4 from "../assets/images/Product4.jpg";
import Image5 from "../assets/images/Product5.jpg";
import Image6 from "../assets/images/Product6.webp";
import Image7 from "../assets/images/Product7.webp";
import Image8 from "../assets/images/Product8.webp";
import Image9 from "../assets/images/Product9.webp";
import Image10 from "../assets/images/Product10.webp";

const mockData = [
  {
    id: 1,
    image: Image1,
    name: "Product 1",
    price: 29.99,
  },

  {
    id: 2,
    image: Image2,
    name: "Product 2",
    price: 39.99,
  },

  {
    id: 3,
    image: Image3,
    name: "Product 3",
    price: 29.99,
  },

  {
    id: 4,
    image: Image4,
    name: "Product 4",
    price: 20.99,
  },

  {
    id: 5,
    image: Image5,
    name: "Product 5",
    price: 29.99,
  },

  {
    id: 6,
    image: Image6,
    name: "Product 6",
    price: 40.99,
  },

  {
    id: 7,
    image: Image7,
    name: "Product 7",
    price: 50.99,
  },

  {
    id: 8,
    image: Image8,
    name: "Product 8",
    price: 60.99,
  },

  {
    id: 9,
    image: Image9,
    name: "Product 9",
    price: 19.99,
  },

  {
    id: 10,
    image: Image10,
    name: "Product 10",
    price: 54.99,
  },
];

// top product section

export { InfoSectionDetails, mockData };
