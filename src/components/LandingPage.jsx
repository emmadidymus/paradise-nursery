const LandingPage = ({ onNavigate }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Paradise Nursery</h1>
      <button
        style={{ padding: '10px 20px', marginTop: '20px' }}
        onClick={() => onNavigate("products")}
      >
        Shop Now
      </button>
    </div>
  );
};

export default LandingPage;
