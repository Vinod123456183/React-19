import React from "react";
import { X, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  deleteFromCart,
  clearCart,
} from "../../store/cartSlice"; // ✅ import all actions

const CartSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  // ✅ Total quantity
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  // ✅ Total price
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Shopping Cart ({totalItems})</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="overflow-y-auto h-[65%]">
        {items.length === 0 ? (
          <p className="p-4 text-gray-500">Your cart is empty 🛒</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="p-4 border-b flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold truncate">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  {/* - Button */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  {/* Quantity */}
                  <span>{item.quantity}</span>

                  {/* + Button */}
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>

                  {/* Line total */}
                  <span className="ml-auto font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>

                  {/* Trash (delete completely) */}
                  <Trash2
                    className="w-4 h-4 text-red-600 cursor-pointer ml-2"
                    onClick={() => dispatch(deleteFromCart(item.id))}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total & Actions */}
      <div className="p-4 border-t">
        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button className="w-full bg-blue-700 text-white py-2 rounded mb-2">
          🧾 Proceed to Checkout
        </button>
        <button
          onClick={() => dispatch(clearCart())}
          className="w-full bg-gray-100 text-gray-700 py-2 rounded"
        >
          🧹 Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
