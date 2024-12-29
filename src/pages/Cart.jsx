import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import ChangeAddress from "../components/ChangeAddress";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { removeCart } from "../redux/SliceCart";
import { increaseQuantity, decreaseQuantity } from "../redux/SliceCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const ProductCart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street,00912");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        {ProductCart.products.length > 0 ? (
          <div>
            <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
              <div className="md:w-2/3">
                <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                  <p>Products</p>
                  <div className="flex space-x-8">
                    <p>PRICE</p>
                    <p>QUANTITY</p>
                    <p>SUBTOTAL</p>
                    <p>REMOVE</p>
                  </div>
                </div>

                <div>
                  {ProductCart.products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-3 border-b"
                    >
                      <div>
                        <img
                          src={product.image}
                          alt="{product.name}"
                          className="w-16 h-16 object-contain rounded"
                        />
                        <div className="flex-1 ml-4">
                          <h3 className="text-lg font-semibold">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      <div className="flex space-x-12 items-center">
                        <p>${product.price}</p>
                        <div className="flex items-center justify-center border">
                          <button
                            onClick={() =>
                              dispatch(decreaseQuantity(product.id))
                            }
                            className="text-xl font-bold px-1.5 border-r"
                          >
                            -
                          </button>
                          <p className="text-xl px-2">{product.quantity}</p>
                          <button
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            }
                            className="text-xl px-1 border-l"
                          >
                            +
                          </button>
                        </div>
                        {/* ................................minus plus section */}

                        <p>${(product.quantity * product.price).toFixed(2)}</p>
                        <button
                          onClick={() => dispatch(removeCart(product.id))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                          {/* ............................................................here */}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* left side section */}

              <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
                <div className="flex justify-between mb-5 border-b pb-1">
                  <span className="text-sm">Total Items:</span>
                  <span>{ProductCart.totalQuantity}</span>
                </div>

                <div className="mb-4 border-b pb-2">
                  <p>Shipping</p>
                  <p className="ml-2">Shipping to :</p>
                  <span className="text-xs font-bold">{address}</span>
                  <button
                    className="text-blue-500 hover:underline mt-1 ml-2"
                    onClick={() => setIsModelOpen(true)}
                  >
                    Change Address
                  </button>
                </div>

                <div className="flex justify-between mb-4">
                  <span>Total Price:</span>
                  <span>${ProductCart.totalPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                >
                  Proceed to checkout
                </button>
              </div>
              {/* right side section */}
            </div>
            <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
              <ChangeAddress
                setAddress={setAddress}
                setIsModelOpen={setIsModelOpen}
              />
            </Modal>
          </div>
        ) : (
          <div>
            <h1>No Cart Available</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
