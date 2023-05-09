import SearchBar from "../SearchBar/SearchBar";
import { BiBookmarks, BiLogOut } from "react-icons/bi";

import { NavContainer, HomeLink, AboutLink, LogOutButton, FavsLink } from "./NavStyles";


export default function Nav(props) {
  
  return (   
    <NavContainer>
        <HomeLink to="/home">HOME</HomeLink>
        <AboutLink to="/about">ABOUT</AboutLink>  
        <FavsLink to='/favorites'><BiBookmarks /></FavsLink>
        <SearchBar onSearch={props.onSearch} random={props.random} onClick= {props.logout}/>
        <LogOutButton onClick={props.logout}><BiLogOut />
          <span>LogOut</span>
        </LogOutButton>
    </NavContainer>
  );
}
