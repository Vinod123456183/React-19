import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/ReduxStore";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../slices/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <h4>{item.rname}</h4>
              <p>
                ₹ {item.price} × {item.quantity} = ₹{" "}
                {item.price * item.quantity}
              </p>

              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                −
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>

              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹ {total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
