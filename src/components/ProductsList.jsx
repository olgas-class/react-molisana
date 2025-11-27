import { products } from "../assets/products";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  return (
    <section>
      <h1>Nostri prodotti</h1>
      <div className="d-flex wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.src}
            title={product.title}
            type={product.type}
            time={product.time}
          />
        ))}
      </div>
    </section>
  );
}
