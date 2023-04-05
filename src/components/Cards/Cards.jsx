import Landing from "../../views/Home/Home";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={style.CardsContainer}>
      {characters.length === 0 ? (
       <Landing />
       
      ) : (
        characters.map((char) => (
          <Card
          key={char.id}
          id={char.id}
          onClose={() => props.onClose(char.id)}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
        />
        ))
      )}
          
    </div>
      
  );
      
  
}
