import { Link } from "react-router-dom";
import styled from "styled-components";


//NAV STYLES
export const NavContainer = styled.nav ` 
    background-color: transparent;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

//NAV LINKS STYLES
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
`;

//SEARCHBAR STYLES
export const SearchImage = styled.img `
    width: 130px;
    display: flex ;
    margin-top: 28px;
`;


export const SearchInput = styled.input `
  background: none;
  color: #ddd9e0;
  height: 40px;
  padding: 15px 20px;
  border-color: #b1a9bc;
  border-radius: 30px 0px 0px 30px;
  transition: 1s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const SearchBtn = styled.button `
  background: #b1a9bc;
  height: 40px;
  width: 20px;
  border: none;
  border-radius: 0px 30px 30px 0px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.8s;
      
`;

export const SearchContainer = styled.div `
  width: 800px;
  margin-left: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    ${SearchInput} {
        width: 40%;
        /* transition: width 30s; */
        transition:1s;
        animation: ease ;
        background: #ddd9e0;
        color: blueviolet;
    }

    ${SearchImage}{
        width: 160px;
        margin-top: 12px;
        transition: 1s;
    }
  }

`;

export const RandomBtn = styled.button `
  background: transparent;
  height: 50px;
  width: 50px;
  margin-right: 200px;
  margin-left: 20px; 
  border-style: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 63px;
    height: 63px;
    &:hover{
        width: 53px;
        height: 53px;
    }
  } 
`;

//HOME VIEW STYLES
export const HomeText = styled.h1 `
    color: #dccdf8;
    text-shadow: 2px 2px #333;
    margin-top: 50px;
`;

export const HomeImage = styled.img `
   margin-top: 30px;
   margin-bottom: 0%;
`;


//CARD STYLES
export const CharId = styled.h2 `
    font-size: small;
    color: #dccdf8;
    display: flex;
    justify-content: center;
    align-items: center ;
    background-color: #1d0f2a;
    border-radius: 40px;
    width: 25px;
    height: 25px;
   
`;

export const NameLink = styled(Link) 
`
    text-decoration: none;
    font-size: 2em;
    font-weight: bolder;
    color:#1d0f2a;
    text-shadow: 2px 4px 8px #ffffbf;
`;


export const Species = styled.h2 `
    font-weight: lighter;
    color: #4e2970;
`;


export const Gender = styled.h2 `
    font-weight: lighter;
    color: #4e2970;
`;


export const ImgCardContenedor = styled.img `
    filter: blur(0.4px);
    border-radius: 50%;
  
 
`;

export const CardContenedor = styled.div `
    border-radius: 16px;
    padding: 20px;
    margin-top: 10px;
    display: inline-block;
    background-color: #8b7f9c;
    font-family: 'Monaco', monospace;
    font-size: 13px;
    text-align: center;
    position: relative;
    color:#271438 ;
    &:hover {
        background: rgba(255, 255, 255, 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(15.6px);
        -webkit-backdrop-filter: blur(15.6px);
        border: 1px solid rgba(255, 255, 255, 0.3);   
        cursor: pointer;
        ${NameLink} { 
                color: #e6e3e8;
        }
        ${Species} { 
                color: #dccdf8;
        }
        ${Gender} { 
                color: #dccdf8 ;
        }
        ${CharId} { 
                color: #1d0f2a ;
                background-color: #dccdf8 ;
        }
}
    &:hover button {
        color:#8b7f9c;
        position: absolute;
        top: 20px;
        right: 20px;
        margin: 9px ;
        background-color: transparent;
        border: none;
        color: whitesmoke;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const CloseButtonCard = styled.button `
    border-color: transparent;
    background-color: #8b7f9c;
    color: #8b7f9c; 
`;

export const HomeButton = styled.button`
  width: 150px;
  color: #1d0f2a;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background-color: #cdb4db;
  margin-left: 190%;
  margin-top: 100px;
  cursor: pointer;
  &:hover {
    color: #8776a2;
  }
`;

//DETAIL STYLES
export const DetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  margin-top: 75px;
`;

export const DetailInfo = styled.div`
  text-align: left;
  font-size: 24px;

`;

export const DetailTexts = styled.p`
  color: #efe9fc;
  /* letter-spacing: 2px; */
`;

export const DetailTitles = styled.b`
  color: #b8de8a;
  font-variant: small-caps;
  text-decoration: underline;
`;

export const DetailImage = styled.img`
  border-radius: 8px;
  box-shadow: 2px 2px 5px whitesmoke;
`;

export const DetailButton = styled.button`
  
  color: #1d0f2a;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background-color: #cdb4db;
  margin-left: 85%;
  margin-top: 25px;
  cursor: pointer;
  &:hover {
    color: #8776a2;
  }
`;

//ABOUT STYLES
export const AboutTitle = styled.h1 `
    color: #efe9fc;
    text-align: center;
    font-weight: bold;
`;

export const AboutContainer = styled.div `
   margin: 20px;
   padding: 30px ;
   line-height: 1.6;
   text-align: justify;
   background-color: rgba(29, 15, 42, 0.8);
   font-size: large;

   p {
    color: #efe9fc;
   }
`;

export const AboutSpan = styled.span `
   color: #efe9fc;
   font-size: large;
   a {
        color: pink;
        font-weight: bolder;
    }

    b {
            color: pink;
        }
`;

//ERROR STYLES

export const ErrorContainer = styled.div `
    width: 100%;
    h1 {
        color: #51b03f;
        /* text-shadow: 2px 6px 8px #ffffbf; */
    }

    img {
        margin-top: 30px;
    }
`;