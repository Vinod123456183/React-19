import { NavLink } from "react-router-dom";
import Cardsdata from "./Cardsdata";
import { useState } from "react";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);

  const cartItems = Cardsdata.slice(0, 2);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <NavLink to="/" className="text-xl font-semibold">
        Add to Cart
      </NavLink>

      <NavLink to="/" className="hover:underline">
        Home
      </NavLink>

      <div className="relative">
        <span
          className="text-2xl cursor-pointer"
          onClick={() => setOpenCart(!openCart)}
        >
          🛒
        </span>

        <span className="absolute -top-2 -right-2 bg-blue-600 text-xs px-2 py-0.5 rounded-full">
          {cartItems.length}
        </span>

        {openCart && (
          <div className="absolute right-0 mt-4 w-80 bg-white text-black shadow-lg rounded-lg p-4">
            {cartItems.map((e, id) => (
              <div key={id} className="flex gap-4 mb-4 border-b pb-2">
                <img
                  src={e.imgdata}
                  className="w-16 h-16 rounded object-cover"
                  alt={e.rname}
                />

                <div className="flex-1">
                  <p className="font-semibold">{e.rname}</p>
                  <p>₹{e.price}</p>
                  <p>Quantity: 1</p>
                </div>

                <span className="text-red-600 cursor-pointer">🗑</span>
              </div>
            ))}

            <p className="text-center font-semibold">Total: ₹{total}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
