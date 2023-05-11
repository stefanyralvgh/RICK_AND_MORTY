import Card from "../../components/Card/Card";
import { connect, useDispatch } from "react-redux";
import { FavsContainer, Container, Select, AllFavs } from "./FavoritesStyles";
import { HomeImage } from "../Home/HomeStyles";
import { filterCards, orderCards, resetFilters } from "../../redux/actions/actions";
// import { BiFilterAlt } from "react-icons/bi";



export function Favorites({ myFavorites }) {
  const dispatch = useDispatch(); 
  return (
    <div>
      <Container>
        <Select name='order' defaultValue={''} onChange={(e)=>dispatch(orderCards(e.target.value))}>
          <option value="" disabled >Sort By</option>
          <option value="Lowest to highest">Lowest to highest</option>
          <option value="Highest to lowest">Highest to lowest</option>
        </Select>
        <Select name="filter" defaultValue={''} onChange={(e)=>dispatch(filterCards(e.target.value))} >
          {/* <option value="" disabled ><BiFilterAlt /> Gender</option> */}
          <option value="" disabled>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </Select>
        <AllFavs onClick={()=>dispatch(resetFilters())}>Show All</AllFavs>
      </Container>
      <FavsContainer>
      {console.log(myFavorites)}
        { myFavorites.length === 0 ? (
          <div>
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
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
  };
}

export default connect(mapStateToProps, null)(Favorites);
