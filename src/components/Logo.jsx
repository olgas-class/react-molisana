import LogoImg from "../assets/img/logo.png";

export default function Logo(props) {
  {
    /* Se l'immagine sta nella cartella public facciamo così: */
  }
  {
    /* <img src="/img/logo.png" alt="" /> */
  }

  {
    /* Se l'immagine sta nella cartella src/assets facciamo così */
  }
  console.log(props);

  return (
    <div className="logo">
      <img src={LogoImg} alt="" />
      <p className="slogan">{props.slogan}</p>
    </div>
  );
}
