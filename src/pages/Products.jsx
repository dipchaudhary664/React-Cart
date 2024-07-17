import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContect";
import { MdAddShoppingCart } from "react-icons/md";

export default function Products() {
  const { products, addCart } = useContext(ProductContext);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:-translate-y-1 m-2 p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4 rounded-t-lg"
              />
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold text-sm">{product.name}</p>
                <p className="text-gray-600 text-sm">฿ {product.price}</p>
                <p className="text-xs text-gray-500">
                  {product.smallDescription}
                </p>
              </div>
              <button
                className="w-full bg-blue-600 text-white text-center text-sm p-2 mt-4 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
                onClick={() => addCart(product)}
              >
                <MdAddShoppingCart className="text-xl mr-2" /> Add To Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
