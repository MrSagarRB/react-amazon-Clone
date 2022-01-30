import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async() => {
    const response = await commerce.products.list();
    setProductsList(response.data);
  }

  
  const addToCart= async(prodId, qty)=>{
    const response =await commerce.cart.add(prodId, qty)
    setCart(response.cart)
    
  }

  const fetchCart=async()=>{
    setCart(await commerce.cart.retrieve())
  }

  const removeFromCart=async(prodId) =>{
    const response = await commerce.cart.remove(prodId)
    setCart(response.cart)
  }








  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header cart={cart} />

        {/* <div className="banner">
          <img src=" https://m.media-amazon.com/images/I/61QUk-m6-4L._SX3000_.jpg" />
        </div> */}

        <Routes>
          <Route
            exact
            path="/"
            element={<Products productsList={productsList}  addToCart={addToCart}  />}
          />
          <Route path="/cart" element={<ShoppingCart cart={cart}  removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
