import { addToCart } from "../redux/SliceCart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, id }) => {
  const dispatch = useDispatch();

  const handleAddCart = (e, { name, price, id, image }) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart({ name, price, id, image }));
    // alert("Product Added");
  };
  return (
    <>
      <Link to={`/product/${id}`}>
        <div className="bg-white p-4 shadow cursor-pointer rounded relative border transform transition-transform duration-300 hover:scale-105 ">
          <img
            src={image}
            alt="Product card image"
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500">${price}</p>

          <div
            onClick={(e) => handleAddCart(e, { name, price, id, image })}
            className="absolute bottom-4 right-2 flex cursor-pointer items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all "
          >
            <span className="group-hover:hidden text-lg">+</span>
            <span className="hidden group-hover:block">Add to cart</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
