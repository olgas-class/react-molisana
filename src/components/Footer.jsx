import style from "./Footer.module.css";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className={`py-40 ${style.background}`}>
      <div className="container">
        <div className="d-flex">
          <div className={style.col}>
            <Logo />
          </div>
          <div className={style.col}>Colonna</div>
          <div className={style.col}>Colonna</div>
        </div>
      </div>
    </footer>
  );
}
