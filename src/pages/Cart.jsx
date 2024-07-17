import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContect";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function Cart() {
  const { cart, invoice, removeCart, setCart, setInvoice } =
    useContext(ProductContext);
  const navigate = useNavigate();

  const placeOrder = () => {
    setCart([]);
    setInvoice({ count: 0, subTotal: 0 });
    navigate("/success");
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="mx-4 my-10 md:py-16 w-full sm:w-full md:w-3/5 flex flex-col items-center">
        {cart.length > 0 ? (
          <div className="w-full">
            {" "}
            {cart.map((product) => {
              return (
                <div
                  key={product.id}
                  className="shadow-md p-4 flex flex-col md:flex-row items-center gap-4 justify-between"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[120px] h-[120px] object-contain md:w-[120px] md:h-[120px]"
                  />

                  <div className="flex flex-col gap-2 md:w-[300px]">
                    <p className="font-bold">{product.name}</p>
                    <p className="text-xs text-gray-500">
                      {product.smallDescription}
                    </p>
                    <p className="text-xs">Qty: {product.quantity}</p>
                  </div>
                  <p className="font-semibold">฿ {product.price}</p>
                  <IoIosRemoveCircleOutline
                    className="text-red-600 text-2xl cursor-pointer"
                    onClick={() => removeCart(product)}
                  />
                </div>
              );
            })}
            <div className="flex flex-col items-end gap-3 py-4">
              <p className="font-bold">
                Subtotal({invoice.count} {invoice.count > 1 ? "items" : "item"}
                ): ${invoice.subTotal.toFixed(2)}
              </p>
              <button
                className="bg-blue-600 text-sm text-white p-2 w-full md:w-[200px] rounded-md"
                onClick={placeOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-2xl p-4 gap-2 mx-4">
            <span>Empty</span>
            <FaShoppingCart className="text-2xl" />
            <Link className="text-blue-600" to={"/"}>
              Add Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
