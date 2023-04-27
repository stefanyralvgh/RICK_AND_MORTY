import styled from "styled-components";
import { Link } from "react-router-dom";



export const NavContainer = styled.nav `
  background-color: #271538;  
  height: 65px;
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 120px;
    justify-content: space-between;
    gap: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 110vw;
    justify-content: space-between;
    
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
   

    /* @media screen and (max-width: 767px) {
      /* margin-left:12px; */
      /* display: flex;
    height: 120px;
    } */
    @media screen and (max-width: 767px) {
    display: flex;
    margin: 0px;
    justify-content: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    
  } 
`


export const LogOutButton = styled.button`
  position: absolute; 
  top: 0;
  right: 0;
  padding: 0.5rem;
  margin: 10px;
  border-radius: 5px;
  border: solid;
  color: white;
  font-size: 9px ;
  cursor: pointer;
  background-color:transparent ;
  transition: transform 0.2s;

    &:active {
      transform: scale(0.9);
    }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    right: 150px;
  }

  &:active {
    transform: scale(0.9);
  }

`;