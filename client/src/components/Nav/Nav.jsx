import SearchBar from "../SearchBar/SearchBar";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { NavContainer, HomeLink, AboutLink, LogOutButton, FavsLink } from "./NavStyles";


export default function Nav(props) {
  
  return (   
    <NavContainer>
        <HomeLink to="/home">HOME</HomeLink>
        <AboutLink to="/about">ABOUT</AboutLink>  
        <FavsLink to='/favorites'><MdOutlineFavoriteBorder /></FavsLink>
        <SearchBar onSearch={props.onSearch} random={props.random} onClick= {props.logout}/>
        <LogOutButton onClick={props.logout}><BiLogOut />
          <span>LogOut</span>
        </LogOutButton>
    </NavContainer>
  );
}
