import style from "./Footer.module.css";
import Logo from "./Logo";
export default function Footer() {
  const pastificioLinks = [
    {
      title: "Pastificio",
      path: "/pastificio",
    },
    {
      title: "Grano",
      path: "/grano",
    },
    {
      title: "Filiera",
      path: "/filiera",
    },
    {
      title: "Sartoria della pasta",
      path: "/sartoria",
    },
  ];

  const prodottiLinks = [
    {
      title: "Le classiche",
      path: "/classiche",
    },
    {
      title: "Le integrali",
      path: "/integrali",
    },
    {
      title: "Le speciali",
      path: "/speciali",
    },
  ];

  return (
    <footer className={`py-40 ${style.background}`}>
      <div className="container">
        <div className="d-flex">
          <div className={style.col}>
            <Logo slogan="Molisana pasta sana" />
          </div>
          <div className={style.col}>
            <h3>Pastificio</h3>
            <ul>
              {pastificioLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.col}>
            <h3>Prodotti</h3>
            <ul>
              {prodottiLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
