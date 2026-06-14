import { Route, Routes } from "react-router-dom";
import Cards from "./components/Food-Components/Cards";
import CardsDetails from "./components/Food-Components/CardsDetails";
import Header2 from "./components/Food-Components/Header2";
import Cart from "./components/Food-Components/Cart";

function App() {
  return (
    <div>
      <Header2 />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardsDetails />} />
        <Route path="/cart/cart" element={<Cart />} />{" "}
        {/* ✅ Cart gets its own route */}
      </Routes>
    </div>
  );
}

export default App;
