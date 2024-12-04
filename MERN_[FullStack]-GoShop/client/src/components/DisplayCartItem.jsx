import React from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../provider/GlobalProvider";
import { DisplayPriceInRupees } from "../utils/DisplayPriceInRupees";
import { FaCaretRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import AddToCartButton from "./AddToCartButton";
import { pricewithDiscount } from "../utils/PriceWithDiscount";
import imageEmpty from "../assets/empty_cart.webp";
import toast from "react-hot-toast";

const DisplayCartItem = ({ close }) => {
  const { notDiscountTotalPrice, totalPrice, totalQty } = useGlobalContext();
  const cartItem = useSelector((state) => state.cartItem.cart);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const redirectToCheckoutPage = () => {
    if (user?._id) {
      navigate("/checkout");
      if (close) {
        close();
      }
      return;
    }
    toast("Please Login");
  };
  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-neutral-900 bg-opacity-70">
      <div className="w-full max-w-sm max-h-screen min-h-screen ml-auto bg-white">
        <div className="flex items-center justify-between gap-3 p-4 shadow-md">
          <h2 className="font-semibold">Cart</h2>
          <Link to={"/"} className="lg:hidden">
            <IoClose size={25} />
          </Link>
          <button onClick={close} className="hidden lg:block">
            <IoClose size={25} />
          </button>
        </div>

        <div className="min-h-[75vh] lg:min-h-[80vh] h-full max-h-[calc(100vh-150px)] bg-blue-50 p-2 flex flex-col gap-4">
          {/***display items */}
          {cartItem[0] ? (
            <>
              <div className="flex items-center justify-between px-4 py-2 text-blue-500 bg-blue-100 rounded-full">
                <p>Your total savings</p>
                <p>
                  {DisplayPriceInRupees(notDiscountTotalPrice - totalPrice)}
                </p>
              </div>
              <div className="grid gap-5 p-4 overflow-auto bg-white rounded-lg">
                {cartItem[0] &&
                  cartItem.map((item, index) => {
                    return (
                      <div
                        key={item?._id + "cartItemDisplay"}
                        className="flex w-full gap-4"
                      >
                        <div className="w-16 h-16 bg-red-500 border rounded min-h-16 min-w-16">
                          <img
                            src={item?.productId?.image[0]}
                            className="object-scale-down"
                          />
                        </div>
                        <div className="w-full max-w-sm text-xs">
                          <p className="text-xs text-ellipsis line-clamp-2">
                            {item?.productId?.name}
                          </p>
                          <p className="text-neutral-400">
                            {item?.productId?.unit}
                          </p>
                          <p className="font-semibold">
                            {DisplayPriceInRupees(
                              pricewithDiscount(
                                item?.productId?.price,
                                item?.productId?.discount
                              )
                            )}
                          </p>
                        </div>
                        <div>
                          <AddToCartButton data={item?.productId} />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Bill details</h3>
                <div className="flex justify-between gap-4 ml-1">
                  <p>Items total</p>
                  <p className="flex items-center gap-2">
                    <span className="line-through text-neutral-400">
                      {DisplayPriceInRupees(notDiscountTotalPrice)}
                    </span>
                    <span>{DisplayPriceInRupees(totalPrice)}</span>
                  </p>
                </div>
                <div className="flex justify-between gap-4 ml-1">
                  <p>Quntity total</p>
                  <p className="flex items-center gap-2">{totalQty} item</p>
                </div>
                <div className="flex justify-between gap-4 ml-1">
                  <p>Delivery Charge</p>
                  <p className="flex items-center gap-2">Free</p>
                </div>
                <div className="flex items-center justify-between gap-4 font-semibold">
                  <p>Grand total</p>
                  <p>{DisplayPriceInRupees(totalPrice)}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center bg-white">
              <img
                src={imageEmpty}
                className="object-scale-down w-full h-full"
              />
              <Link
                onClick={close}
                to={"/"}
                className="block px-4 py-2 text-white bg-green-600 rounded"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>

        {cartItem[0] && (
          <div className="p-2">
            <div className="static flex items-center justify-between gap-4 px-4 py-4 text-base font-bold bg-green-700 rounded text-neutral-100 bottom-3">
              <div>{DisplayPriceInRupees(totalPrice)}</div>
              <button
                onClick={redirectToCheckoutPage}
                className="flex items-center gap-1"
              >
                Proceed
                <span>
                  <FaCaretRight />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DisplayCartItem;
