function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="cart-item"
        >
          <h4>{item.name}</h4>

          <p>
            ₹{item.price} ×{" "}
            {item.quantity}
          </p>

          <button
            onClick={() =>
              increaseQty(item.id)
            }
          >
            +
          </button>

          <button
            onClick={() =>
              decreaseQty(item.id)
            }
          >
            -
          </button>

          <button
            onClick={() =>
              removeItem(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button
        onClick={() =>
          alert(
            "Order Placed Successfully!"
          )
        }
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;