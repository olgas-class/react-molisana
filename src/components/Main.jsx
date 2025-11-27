import style from "./Main.module.css";
import ProductsList from "./ProductsList";
import { products, featuredProducts } from "../assets/products";
import Alert from "./Alert";
import Logo from "./Logo";
import ProductCard from "./ProductCard";

export default function Main() {
  const mainClasses = `py-40 text-center ${style.background}`;
  return (
    <main className={mainClasses}>
      <Alert type="error">
        <h2>ERRORE</h2>
      </Alert>
      <Alert type="success">
        <h2>Tutto ok</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          reiciendis voluptatibus, vitae quibusdam at laborum voluptate,
          laudantium accusantium cupiditate placeat fuga possimus nam. Itaque ex
          fugiat praesentium, quibusdam excepturi totam.
        </p>
      </Alert>

      <div className="container">
        <Logo slogan="Sponsorizzato dalla Miao corporation" />

        {/* Il bordo dell pa sta lunga deve essere blue, della pasta corta - verde e della pasta cortissima - rosso */}
        {products.length !== 0 ? <ProductsList /> : <Alert />}
      </div>
    </main>
  );
}
