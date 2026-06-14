import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../slices/CartSlice";

interface CartItem {
  id: number;
  rname: string;
  price: number;
  imgdata: string;
  quantity: number;
}

interface RootState {
  cart: { items: CartItem[] };
}

const CardsDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-[#0f0d0b] text-[#f0ece6] pb-16"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#1a1714] border-b border-[#2e2a25] px-6 md:px-10 py-5">
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Order
        </h2>
        <p className="text-[#8a8077] text-xs mt-0.5">
          {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your
          cart
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-6 mt-6 space-y-4">
        {/* Empty State */}
        {cartItems.length === 0 && (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🍽️</div>
            <p className="text-[#8a8077] text-sm">Your cart is empty</p>
          </div>
        )}

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 bg-[#211e1a] border border-[#2e2a25]
                       rounded-2xl p-4 hover:border-[#3e3830] transition-colors"
          >
            {/* Image */}
            <img
              src={item.imgdata}
              alt={item.rname}
              className="w-24 h-24 object-cover rounded-xl shrink-0"
              onError={(e) =>
                ((e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/96x96/211e1a/8a8077?text=F")
              }
            />

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3
                className="font-bold text-[#f0ece6] text-base truncate mb-0.5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.rname}
              </h3>
              <p className="text-[#e8a045] text-sm font-semibold mb-3">
                ₹{item.price}{" "}
                <span className="text-[#8a8077] font-normal text-xs">each</span>
              </p>

              {/* Qty Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="w-7 h-7 rounded-full bg-[#1a1714] border border-[#2e2a25]
                             text-[#f0ece6] text-sm flex items-center justify-center
                             hover:bg-[#2e2a25] transition-colors"
                >
                  −
                </button>
                <span className="text-sm font-semibold w-4 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="w-7 h-7 rounded-full bg-[#1a1714] border border-[#2e2a25]
                             text-[#f0ece6] text-sm flex items-center justify-center
                             hover:bg-[#2e2a25] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-end justify-between shrink-0">
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-[#c75f3e] hover:scale-110 transition-transform text-lg"
                title="Remove"
              >
                🗑
              </button>
              <p className="text-[#f0ece6] font-bold text-base">
                ₹{item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}

        {/* Summary Card */}
        {cartItems.length > 0 && (
          <div className="bg-[#211e1a] border border-[#2e2a25] rounded-2xl p-5 mt-6">
            <h3
              className="text-lg font-bold mb-4 text-[#f0ece6]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Order Summary
            </h3>

            <div className="space-y-2 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-[#8a8077]">
                    {item.rname}{" "}
                    <span className="text-[#4a463f]">× {item.quantity}</span>
                  </span>
                  <span className="text-[#f0ece6]">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#2e2a25] pt-4 flex justify-between items-center mb-5">
              <span className="text-[#8a8077] text-sm">Total Amount</span>
              <span className="text-[#e8a045] text-xl font-bold">₹{total}</span>
            </div>

            <button
              className="w-full bg-[#e8a045] text-[#0f0d0b] font-bold text-sm
                         rounded-xl py-3.5 hover:bg-[#f0b45a] transition-colors"
            >
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsDetails;
