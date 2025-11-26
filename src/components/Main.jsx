import style from "./Main.module.css";
import { products } from "../assets/products";

export default function Main() {
  const mainClasses = `py-40 text-center ${style.background}`;
  return (
    <main className={mainClasses}>
      <div className="container">
        <h1>Nostri prodotti</h1>

        {/* Il bordo dell pa sta lunga deve essere blue, della pasta corta - verde e della pasta cortissima - rosso */}
        <div className="d-flex wrap">
          {products.map((curProduct) => {
            //             let colClass = "col ";
            //
            //             if (curProduct.type === "lunga") {
            //               colClass += "border-blue";
            //             } else if (curProduct.type === "corta") {
            //               colClass += "border-green";
            //             } else {
            //               colClass += "border-red";
            //             }

            // const colClass =
            //   curProduct.type === "lunga"
            //     ? "col border-blue"
            //     : curProduct.type === "corta"
            //     ? "col border-green"
            //     : "col border-red";

            return (
              <div className={`col ${curProduct.type}`} key={curProduct.id}>
                <img src={curProduct.src} alt={curProduct.title} />
                <h3>{curProduct.title}</h3>
                <p>Tipologia: {curProduct.type}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
