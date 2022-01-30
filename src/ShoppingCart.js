import React from "react";
import "./css/cart.css";

function ShoppingCart() {
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
         
         
          <div className="checkoutProduct">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPSUR-T-MEN-COPATE2956072B022AAD/1586406885432_0..jpg"
              className=""
            />
            <div className="checkoutProduct_info">
              <p className="checkoutProduct_title"> Product Name</p>
              <p className="checkoutProduct_price">
                <strong>$60.00 * 1 = 60</strong>
              </p>
              <button>Remove from Basket</button>
            </div>
          </div>


         







        </div>
      </div>
      <div className="checkout_right">
        <div className="subtotal">
          <p>
            Subtotal (2 items): <strong> $120.00</strong>{" "}
          </p>
          <small className="subtotal_gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </div>
        <button>Procced To Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
