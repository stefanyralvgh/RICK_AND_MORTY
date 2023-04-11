import styled from "styled-components";
import { Link } from "react-router-dom";



export const NavContainer = styled.nav `
  background-color: transparent;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative; 
  
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 120px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 95vw;
  }
`;

export const HomeLink = styled(Link)
`
    width: 30px;
    text-decoration: none;
    color: #dccdf8;
`;

export const AboutLink = styled(Link)
`
    width: 50px;
    margin-left: 50px;
    text-decoration: none;
    color: #dccdf8;

    @media screen and (max-width: 767px) {
      margin-left:12px;
    }
`;

export const FavsLink = styled(Link)`
    color: #41225e;
    text-decoration: none;
    height: 25px;
    width: 90px;
    border-radius: 20px;
    background-color: #dccdf8;
    margin: auto;
    margin-left: 17px;
   

    @media screen and (max-width: 767px) {
      margin-left:12px;
    }
`


export const LogOutButton = styled.button`
  position: absolute; 
  top: 0;
  right: 0;
  padding: 0.5rem;
  border-radius: 5px;
  border: solid;
  color: white;
  font-size: 9px ;
  cursor: pointer;
  background-color:transparent ;
   

  &:hover {
    font-size:8px;
}
`;