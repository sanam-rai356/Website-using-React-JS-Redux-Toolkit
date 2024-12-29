import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { useSelector } from "react-redux";
import { TiArrowSortedUp } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [PaymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // for collecting datas information from Billing Information,Shipping Information,Payment Method
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12344",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };

    setOrder(newOrder);

    navigate("/order-confirmation");
  };

  // for collecting datas information from Billing Information,Shipping Information,Payment Method
  return (
    <>
      <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        <h3 className="text-2xl font-semibold mb-4">Checkout</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
          <div className="md:w-2/3">
            <div className="border p-2 mb-6 cursor-pointer">
              <div
                className="flex items-center justify-between"
                onClick={() => setBillingToggle(!billingToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Billing Information
                </h3>
                {billingToggle ? (
                  <TiArrowSortedDown className="cursor-pointer" />
                ) : (
                  <TiArrowSortedUp className="cursor-pointer" />
                )}
              </div>

              {/* ......................................line............ */}

              <div className={`${billingToggle ? "" : "hidden"}`}>
                <div>
                  <div>
                    <label className="block mb-1 text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="w-full px-3 py-2 border focus:outline-none"
                    />
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <label className="block mb-1 text-gray-700">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      className="w-full px-3 py-2 border focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label className="block mb-1 text-gray-700">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter Phone Number"
                      className="w-full px-3 py-2 border focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* ......................................line............ */}
            </div>
            {/* billing information checkout */}

            {/* .......................................line */}

            <div className="border p-2 mb-6 cursor-pointer">
              <div
                className="flex items-center justify-between"
                onClick={() => setShippingToggle(!shippingToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">
                  Shipping Information
                </h3>
                {shippingToggle ? (
                  <TiArrowSortedDown className="cursor-pointer" />
                ) : (
                  <TiArrowSortedUp className="cursor-pointer" />
                )}
              </div>

              {/* ......................................line............ */}

              <div className={`${shippingToggle ? "" : "hidden"}`}>
                <div>
                  <div>
                    <label className="block mb-1 text-gray-700">Address</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Address"
                      className="w-full px-3 py-2 border focus:outline-none"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <label className="block mb-1 text-gray-700">City</label>
                    <input
                      type="text"
                      placeholder="Enter City Name"
                      name="city"
                      className="w-full px-3 py-2 border focus:outline-none"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label className="block mb-1 text-gray-700">Zip Code</label>
                    <input
                      type="text"
                      name="zipcode"
                      placeholder="Enter Zip Code"
                      className="w-full px-3 py-2 border focus:outline-none"
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          zip: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* ......................................line............ */}
            </div>
            {/* shipping information checkout */}

            {/* .......................................line */}

            <div className="border p-2 mb-6 cursor-pointer">
              <div
                className="flex items-center justify-between"
                onClick={() => setPaymentToggle(!PaymentToggle)}
              >
                <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                {PaymentToggle ? (
                  <TiArrowSortedDown className="cursor-pointer" />
                ) : (
                  <TiArrowSortedUp className="cursor-pointer" />
                )}
              </div>

              {/* ......................................line............ */}

              <div className={`${PaymentToggle ? "" : "hidden"}`}>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="cursor-pointer"
                  />
                  <label className="block text-gray-700 ml-2">
                    Cash on Delivery
                  </label>
                </div>

                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "dc"}
                    onChange={() => setPaymentMethod("dc")}
                    className="cursor-pointer"
                  />
                  <label className="block text-gray-700 ml-2">Debit Card</label>
                </div>

                {paymentMethod === "dc" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Debit Card Information
                    </h3>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Number
                      </label>
                      <input
                        placeholder="Enter Card Number"
                        type="text"
                        className="border p-2 w-full rounded focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Card Holder Name
                      </label>
                      <input
                        className="border p-2 w-full rounded focus:outline-none"
                        placeholder="Enter Card Holder Name"
                        type="text"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Expire Date
                      </label>
                      <input
                        className="border p-2 w-full rounded focus:outline-none"
                        placeholder="DD/MM/YY"
                        type="text"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        CVV
                      </label>
                      <input
                        className="border p-2 w-full rounded focus:outline-none"
                        placeholder="Enter CVV"
                        type="text"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Payment Method */}
            {/* ......................................line............ */}
          </div>
          {/* first div */}

          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="space-y-4">
              {cart.products.map((product) => (
                <div key={product.id} className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt="{product.name}"
                      className="size-16 object-contain rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-md font-semibold">{product.name}</h4>
                      <p className="text-gray-600">
                        {product.price * product.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-5 pt-4">
              <div className="flex justify-between">
                <span>Total Price:</span>
                <span className="font=semibold">
                  {cart.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={handleOrder}
              className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
            >
              Place Order
            </button>
          </div>
          {/* second div */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
