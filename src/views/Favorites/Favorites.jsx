import Card from "../../components/Card/Card";
import { connect } from "react-redux";
import { FavsContainer } from "./FavoritesStyles";
import { HomeImage, HomeText } from "../Home/HomeStyles";
import { DetailButton } from "../Detail/DetailStyles";
import { useNavigate } from "react-router-dom";

export function Favorites({ myFavorites }) {
  const navigate = useNavigate();

  return (
    <div>
      <FavsContainer>
        {myFavorites.length === 0 ? (
          <div>
            <HomeText>¡Agrega un favorito!</HomeText>
            <HomeImage src="./Images/RYM.png" alt="Rick y Morty" />
          </div>
        ) : (
          myFavorites.map((char) => (
            <Card
              id={char.id}
              name={char.name}
              species={char.species}
              gender={char.gender}
              image={char.image}
              key={char.id}
              myFavorites={myFavorites}
            />
          ))
        )}
      </FavsContainer>
        <div>
          <DetailButton onClick={() => navigate("/home")}>⤺ Home</DetailButton>
        </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
