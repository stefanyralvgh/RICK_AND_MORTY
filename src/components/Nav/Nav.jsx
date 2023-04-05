import SearchBar from "../SearchBar/SearchBar";

import { NavContainer, HomeLink, AboutLink, LogOutButton } from "./NavStyles";


export default function Nav(props) {
  
  return (   
    <NavContainer>
        <HomeLink to="/home">HOME</HomeLink>
        <AboutLink to="/about">ABOUT</AboutLink>  
        <SearchBar onSearch={props.onSearch} random={props.random} onClick= {props.logout}/>
        <LogOutButton onClick={props.logout}>LOGOUT</LogOutButton>
    </NavContainer>
  );
}
