import { CardContenedor, CloseButtonCard, Name, Species, Gender } from "../Styles";

export default function Card(props) {
  return (
    <CardContenedor>
          <CloseButtonCard onClick={props.onClose}>X</CloseButtonCard>
          <Name>{props.name}</Name>
          <Species>{props.species}</Species>
          <Gender>{props.gender}</Gender>
          <img src={props.image} alt="foto del personaje" />
    </CardContenedor>
     
  );
}
