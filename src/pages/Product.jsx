import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/SliceCart";

const Product = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const NewProduct = products.find((product) => product.id === parseInt(id));
    setProduct(NewProduct);
  }, [id, product]);

  if (!product) return <div>....Loading</div>;
  return (
    <>
      <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row gap-x-16">
          {/* Product image */}
          <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
            <img src={product.image} alt={product.name} className="h-full" />
          </div>
          {/* product information */}

          <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
            <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
            <p className="text-xl font-semibold text-gray-800 mb-4">
              ${product.price}
            </p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
