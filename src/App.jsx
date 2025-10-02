import { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("landing"); // 'landing', 'products', 'cart'

  // Add item to cart
  const addToCart = (plant) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === plant.id);
      if (existing) {
        return prev.map(item =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...plant, quantity: 1 }];
      }
    });
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    setCart(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item))
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Render the page based on state
  const renderPage = () => {
    if (page === "landing") return <LandingPage onNavigate={setPage} />;
    if (page === "products") return <ProductList addToCart={addToCart} />;
    if (page === "cart") return <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />;
  };

  return (
    <div>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} onNavigate={setPage} />
      <div style={{ padding: "20px" }}>
        {renderPage()}
      </div>
      <footer style={{ textAlign: 'center', marginTop: '50px' }}>Paradise Nursery © 2025</footer>
    </div>
  );
}

export default App;
