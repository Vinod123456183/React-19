import { useSelector } from "react-redux";
import type { RootState } from "../../store/ReduxStore";

const Header2 = () => {
  const count = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>My Shop</h2>

      <div>
        🛒 Cart: <b>{count}</b>
      </div>
    </div>
  );
};

export default Header2;
