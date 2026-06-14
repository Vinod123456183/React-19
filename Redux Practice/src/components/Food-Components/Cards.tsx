import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQuantity } from "../../slices/CartSlice";
import type { RootState } from "../../store/ReduxStore";
import Cardsdata from "./Cardsdata";

const Cards = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const getCartItem = (id: number) => cartItems.find((item) => item.id === id);

  return (
    <div className="p-6">
      <h1>Food Items</h1>

      <div className="grid grid-cols-3 gap-4">
        {Cardsdata.map((item) => {
          const cartItem = getCartItem(item.id);

          return (
            <div key={item.id} className="border p-4 rounded">
              <img src={item.imgdata} className="h-32 w-full object-cover" />
              <h3>{item.rname}</h3>
              <p>₹{item.price}</p>

              {cartItem ? (
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  In Cart ({cartItem.quantity}) +
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        rname: item.rname,
                        price: item.price,
                        imgdata: item.imgdata,
                      }),
                    )
                  }
                >
                  Add
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
