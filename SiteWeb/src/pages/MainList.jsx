import Header from "../components/Header";
import Card from "../components/Card";

function MainList() {
  var listCard = [
    { nom: "dr P", profe: "Médecin" },
    { nom: "dr M", profe: "Médecin" },
    { nom: "dr G", profe: "Osthéo" },
    { nom: "dr F", profe: "Médecin" },
    { nom: "dr D", profe: "Dentiste" },
    { nom: "dr E", profe: "Médecin" },
    { nom: "dr Z", profe: "Podologue" },
    { nom: "dr A", profe: "Médecin" },
  ];
  return (
    <>
      <Header />
      <div className="list-cards">
        {listCard?.map((e, index) => (
          <Card nom={e.nom} key={index} profe={e.profe}></Card>
        ))}
      </div>
    </>
  );
}

export default MainList;
