import SearchBar from "../SearchBar/SearchBar";

import { NavContainer, HomeLink, AboutLink } from "../Styles";


export default function Nav(props) {
  
  return (   
    <NavContainer>
        <SearchBar onSearch={props.onSearch} random={props.random} onClick= {props.logout}/>
        <HomeLink to="/home">HOME</HomeLink>
        <AboutLink to="/about">ABOUT</AboutLink>  
        <button onClick={props.logout}>LOGOUT</button>
    </NavContainer>
  );
}
