const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map(item => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            gap: '20px',
            margin: '10px',
            border: '1px solid gray',
            padding: '10px'
          }}
        >
          <img src={item.image} alt={item.name} style={{ width: '100px' }} />
          <div>
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </div>
        </div>
      ))}
      <h3>Total Price: ${totalPrice}</h3>
      <button>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
