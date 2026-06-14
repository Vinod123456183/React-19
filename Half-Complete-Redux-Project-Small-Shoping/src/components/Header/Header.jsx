import React from "react";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

const Header = ({ onCartClick }) => {
  // ✅ Get cart items from redux
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center relative">
      <h1 className="text-2xl font-bold text-gray-800">eCart</h1>

      <input
        type="text"
        placeholder="Search Product"
        className="border px-4 py-2 rounded w-1/3"
      />

      <div className="relative cursor-pointer" onClick={onCartClick}>
        <ShoppingCart className="w-7 h-7 text-gray-700" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
