const Navbar = ({ cartCount, onNavigate }) => {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', borderBottom: '1px solid gray' }}>
      <button onClick={() => onNavigate("landing")}>Home</button>
      <button onClick={() => onNavigate("products")}>Products</button>
      <button onClick={() => onNavigate("cart")}>Cart ({cartCount})</button>
    </nav>
  );
};

export default Navbar;
