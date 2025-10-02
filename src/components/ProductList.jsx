import Section from "./Section";
import { plants } from "../data/plants";

const ProductList = ({ addToCart }) => {
  const categories = [...new Set(plants.map(p => p.category))]; // get unique categories

  return (
    <div>
      {categories.map(category => (
        <Section
          key={category}
          title={category}
          plants={plants.filter(p => p.category === category)}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
