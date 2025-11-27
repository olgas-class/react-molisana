export default function ProductCard(props) {
  const { image, title, type, time } = props;
  let colClass = "col ";

  // if (type === "lunga") {
  //   colClass += "border-blue";
  // } else if (type === "corta") {
  //   colClass += "border-green";
  // } else {
  //   colClass += "border-red";
  // }

  return (
    <div className={`col ${type}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Tipologia: {type}</p>
      {/* short circuit evaluation */}
      {/* {curProduct.time && <p>Tempo di cottura: {curProduct.time}</p>} */}
      {/* Per gestire il valore di fallback */}
      <p>Tempo di cottura: {time || "Non defenito"}</p>
    </div>
  );
}
