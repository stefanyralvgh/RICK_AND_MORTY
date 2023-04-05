// import { Link } from 'react-router-dom';
import { CardContenedor, 
  CloseButtonCard,
  Species,
  Gender,
  ImgCardContenedor,
  CharId,
  NameLink } from './CardStyles';


export default function Card(props) {
  return (
    <CardContenedor>
          <CharId>{props.id}</CharId>
          <CloseButtonCard onClick={props.onClose}>X</CloseButtonCard>
            <NameLink to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
          </NameLink>
          <Species>{props.species}</Species>
          <Gender>{props.gender}</Gender>
          <ImgCardContenedor src={props.image} alt="foto del personaje" />
    </CardContenedor>
     
  );
}
