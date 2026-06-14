import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice"; // ✅ import your action

const Product = ({
  id,
  name,
  image,
  price,
  originalPrice,
  rating,
  reviews,
  description,
  inStock,
  discount,
}) => {
  const dispatch = useDispatch(); // ✅ inside component

  const handleToCart = () => {
    dispatch(addToCart({ id, name, price, image })); // ✅ pass payload
    console.log("Added to cart:", id, name, price, image);
  };

  return (
    <div className="rounded-lg p-4 shadow hover:shadow-2xl transition flex flex-col">
      {/* Product Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-40 mx-auto mb-4 object-contain"
        />
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Product Info */}
      <h3 className="text-lg font-semibold truncate">{name}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

      <p className="mt-2 text-yellow-500 text-sm">
        ⭐ {rating} ({reviews} reviews)
      </p>

      {/* Pricing */}
      <div className="mt-2">
        <span className="text-xl font-bold text-gray-900">
          ${price.toFixed(2)}
        </span>
        {originalPrice && originalPrice > price && (
          <span className="ml-2 line-through text-gray-400">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Stock Info */}
      <div className="text-sm mt-1 py-2">
        {inStock ? (
          <span className="text-green-600">In Stock</span>
        ) : (
          <span className="text-red-600">Out of Stock</span>
        )}
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleToCart}
        disabled={!inStock}
        className={`mt-auto px-4 py-2 rounded font-medium text-white ${
          inStock
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
