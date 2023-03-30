import SearchBar from "../SearchBar/SearchBar";
import { NavContainer, HomeLink, AboutLink } from "../Styles";


export default function Nav(props) {
  
  return (
    <NavContainer>
        <SearchBar onSearch={props.onSearch} random={props.random} /> 
        <HomeLink to="/home">HOME</HomeLink>  
        <AboutLink to="/about">ABOUT</AboutLink>  
    </NavContainer>
  );
}
