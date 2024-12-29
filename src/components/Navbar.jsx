import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const products = useSelector((state) => state.cart.products);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openSignup = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };
  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link to="/">e-SHOP</Link>
          </div>

          <div className="relative flex-1 mx-4">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                className="w-full border py-2 px-4 focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch className="absolute top-3 right-3 text-red-500" />
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-lg" />
              {products.length > 0 && (
                <span className="absolute -top-2 text-xs size-5 left-2 bg-red-600 rounded-full flex justify-center items-center text-white">
                  {products.length}
                </span>
              )}
            </Link>

            <button
              className="hidden md:block"
              onClick={() => setIsModelOpen(true)}
            >
              Login | Register
            </button>
            <button className="block md:hidden">
              <FaUser />
            </button>
          </div>
          {/* here */}
        </div>

        <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
          <Link to="/" className="hover:underline">
            Home
          </Link>

          <Link to="/shop" className="hover:underline">
            Shop
          </Link>

          <Link to="/contact" className="hover:underline">
            Contact
          </Link>

          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
        <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
          {isLogin ? (
            <Login openSignup={openSignup} />
          ) : (
            <Register openLogin={openLogin} />
          )}
        </Modal>
      </nav>
    </>
  );
};

export default Navbar;