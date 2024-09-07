import React from "react";
import { useCart } from "../../Provider/CartProvider";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access addToCart from CartContext

  return (
    <>
      <div className="p-1 max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      {/* Image Container */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover p-6 max-w-full max-h-full rounded"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-base font-semibold mb-2 text-center lg:text-left">
        {product.name}
      </h3>

      {/* Price Section */}
      <div className="flex gap-1 justify-center lg:justify-start mb-2">
        {/* Offer Price */}
        <div className="text-sm text-gray-800 font-bold">
          €{product.offerPrice.toFixed(2)}
        </div>
        {/* Regular Price */}
        <div className="text-sm text-gray-300 font-bold line-through">
          €{product.regularPrice.toFixed(2)}
        </div>
       
        <div className="text-base text-red-800 font-bold ">
          {product.offerPercentage}% OFF
        </div>
      </div>

      
      <p className="text-gray-600 mb-2 text-justify text-sm lg:text-left">
        {product.description}
      </p>

      {/* Add to Cart Button */}
      <button
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
    </>
  );
};

export default ProductCard;
