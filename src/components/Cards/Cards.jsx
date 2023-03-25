import Card from "../Card/Card";
import { CardsContainer } from "../Styles";

export default function Cards(props) {
  const { characters } = props;

  return (
    <CardsContainer>
      {characters.map((char) => (//Card(char, onClose???)}
        
          <Card
            key={char.id}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
          />
        )
      )}
      
    </CardsContainer>
  );
}
