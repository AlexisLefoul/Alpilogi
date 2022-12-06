function Card(props) {
  return (
    <div className="card">
      <h2>{props.nom}</h2>
      <h3>{props.profe}</h3>
    </div>
  );
}

export default Card;
