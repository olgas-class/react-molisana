import LogoImg from "../assets/img/logo.png";

export default function Logo() {
  {
    /* Se l'immagine sta nella cartella public facciamo così: */
  }
  {
    /* <img src="/img/logo.png" alt="" /> */
  }

  {
    /* Se l'immagine sta nella cartella src/assets facciamo così */
  }

  return <img src={LogoImg} alt="" />;
}
