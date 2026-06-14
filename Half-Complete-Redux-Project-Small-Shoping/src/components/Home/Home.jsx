import React, { useState } from "react";
import Product from "../context/Product";
import api from "../../products";
import Header from "../Header/Header";
import CartSidebar from "../Header/CartSidebar";
import { Provider } from "react-redux";
import store from "../../store/store";

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <Provider store={store}>
      <div className="best-page-container-2">
        <Header onCartClick={toggleCart} cartCount={0} />

        <main className="p-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Feature Products
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Discover our carefully curated selection of premium products
            designed to enhance your lifestyle.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {api.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviews={product.reviews}
                description={product.description}
                inStock={product.inStock}
                discount={product.discount}
              />
            ))}
          </div>
        </main>
        <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
      </div>
    </Provider>
  );
};

export default Home;
