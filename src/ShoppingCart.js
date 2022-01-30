import React from "react";
import "./css/cart.css";
import { Link } from "react-router-dom";

function ShoppingCart({cart , removeFromCart}) {
  
  
  console.log(cart)


  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png"
          className="checkout_add"
        />
        <div>
          <h3>Hello Sagar</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
         
         {
           
           cart?.line_items?.map(item=>{
             
             return <div className="checkoutProduct"  key={item.id}>

             <img
               src={item.image.url}
             />
             <div className="checkoutProduct_info" >
               <p className="checkoutProduct_title">{item.name} </p>
               <p className="checkoutProduct_price">
                 <strong>{item.price.formatted_with_symbol} * {item.quantity} = {cart.currency.symbol} {item.price.raw*item.quantity }</strong>
               </p>
               <button onClick={()=>removeFromCart(item.id)}> Remove from Basket</button>
             </div>
           </div>
 
           })

         }
        

        </div>
      </div>
      <div className="checkout_right">
        <div className="subtotal">
          <p>
            Subtotal ({cart?.total_items} items): <strong>{cart?.subtotal.formatted_with_symbol}</strong>{" "}
          </p>
          <small className="subtotal_gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </div>
        <button >Procced To Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
