import React from "react";

function ShoppingCart() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9b75c78-23da-4033-ba1c-0feb2f6ec21a/d2j7rk1-6ad65174-45e6-4d18-a4ed-de1c0c15d5e1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5Yjc1Yzc4LTIzZGEtNDAzMy1iYTFjLTBmZWIyZjZlYzIxYVwvZDJqN3JrMS02YWQ2NTE3NC00NWU2LTRkMTgtYTRlZC1kZTFjMGMxNWQ1ZTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mZyYzbDVYci4JZq14prKailBLq4XV-wEUFqk6r3tVLo" />
        <div>
          <h3>Hello Sagar</h3>
          <h2>Your Shopping Basket</h2>
          <div className="checkoutProduct">
            <img src="" />
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
