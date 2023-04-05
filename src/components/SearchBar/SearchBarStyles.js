import styled from "styled-components";



// export const SearchImage = styled.img `
//     width: 130px;
//     display: flex ;
//     margin-top: 28px;
// `;

/* si la activo, esto va en searchcontainer, bajo search input en hover ${SearchImage}{
        width: 160px;
        margin-top: 12px;
        transition: 1s;
    } */


export const SearchInput = styled.input `
  background: none;
  width: 240px;
  color: #ddd9e0;
  height: 40px;
  padding: 15px 20px;
  border-color: #b1a9bc;
  margin-left:600px;
  border-radius: 30px 0px 0px 30px;
  transition: 1s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media screen and (max-width: 767px) {
    display: flex;
    margin-left: 300px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 30vw;
  
  }
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
    height: 67px;
    &:hover{
        height: 80px;
    }
  }

  @media screen and (max-width: 767px) {
    justify-content: flex-end;
  }
`;

export const SearchContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:25px;
  cursor: pointer;
  &:hover {
    ${SearchInput} {
        width: 270px;
        transition:1s;
        animation: ease ;
        background: #ddd9e0;
        color: blueviolet;
    }
   
    ${RandomBtn} {
        img{
          height: 80px;
        }
        transition:1s;
        animation: ease ;
    }
  }

  @media screen and (max-width: 767px) {
    display: flex;
    height: 120px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 30vw;
  
  }
`;

