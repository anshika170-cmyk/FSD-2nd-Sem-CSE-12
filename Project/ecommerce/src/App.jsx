import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import HeroBanner from "./components/HeroBanner";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

import productsData from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const login = () => {
    if (!isLoggedIn) {
      const name = prompt("Enter Username");

      if (name) {
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  const addToCart = (product) => {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  const removeItem = (id) => {
    setCart(
      cart.filter(
        (item) => item.id !== id
      )
    );
  };

  const filteredProducts =
    productsData.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        login={login}
        isLoggedIn={isLoggedIn}
        cartCount={cart.reduce(
          (sum, item) =>
            sum + item.quantity,
          0
        )}
      />

      <Categories />
      <HeroBanner />

      <ProductGrid
  products={filteredProducts}
  addToCart={addToCart}
/>

      <Cart
        cart={cart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
      />
    </>
  );
}

export default App;