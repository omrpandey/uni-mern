import React, { useState, useEffect } from "react";
import axios from "axios";

const CartDrawer = ({ userId, onCheckout }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderNote, setOrderNote] = useState("");
  const [giftWrap, setGiftWrap] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (userId) {
      fetchCart();
    }
  }, [userId]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`/api/cart`, {
        params: { userId },
      });
      setCartItems(response.data.cart.products);
      setCartCount(response.data.cartCount);
      setTotalAmount(response.data.totalAmount);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const updateCart = async (productId, newQuantity) => {
    try {
      await axios.put(`/api/cart/update`, {
        userId,
        productId,
        quantity: newQuantity,
      });
      fetchCart(); // Refresh cart after update
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const removeCartItem = async (productId) => {
    try {
      await axios.put(`/api/cart/update`, {
        userId,
        productId,
        quantity: 0,
      });
      fetchCart();
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  const handleCheckoutClick = async () => {
    try {
      await axios.post(`/api/checkout`, {
        userId,
        items: cartItems,
        note: orderNote,
        giftWrap,
      });
      onCheckout();
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className={`drawer drawer--right ${cartItems.length === 0 ? "is-empty" : ""}`} tabIndex="-1">
      <div className="drawer__contents">
        <div className="drawer__header">
          <h2>Cart</h2>
          <button className="drawer__close-button">Close</button>
        </div>

        <div className="drawer__inner">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.productId._id} className="cart__item">
                <p>{item.name}</p>
                <p>Price: Rs. {item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateCart(item.productId._id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCart(item.productId._id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeCartItem(item.productId._id)}>Remove</button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}

          <div>
            <label>Order note</label>
            <textarea value={orderNote} onChange={(e) => setOrderNote(e.target.value)}></textarea>
          </div>

          <div>
            <input type="checkbox" checked={giftWrap} onChange={() => setGiftWrap(!giftWrap)} />
            <label>Gift wrap this order</label>
          </div>

          <p>Subtotal: Rs. {totalAmount.toFixed(2)}</p>
          <button onClick={handleCheckoutClick}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
