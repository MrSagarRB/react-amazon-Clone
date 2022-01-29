import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <Router>
      <div className="App" > 
      <Header />
      <div className="banner">
          <img src=" https://m.media-amazon.com/images/I/61QUk-m6-4L._SX3000_.jpg" />
        </div>
       
      <Routes>
 
        <Route exact path="/" element={ <Products/> } />
        <Route path="/cart" element={ <ShoppingCart /> } />

         </Routes>
         </div>
    </Router>
  )
}

export default App;
