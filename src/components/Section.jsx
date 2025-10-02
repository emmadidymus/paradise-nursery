import ProductCard from "./ProductCard";

const Section = ({ title, plants, addToCart }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {plants.map(plant => (
          <ProductCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default Section;
