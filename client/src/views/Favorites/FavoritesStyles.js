import styled from "styled-components";

export const FavsContainer = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 9px;

`;

export const Select = styled.select`
  background-color: #cccccc;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  margin-right: 20px;
  margin-top: 80px;
  padding: 10px;
  cursor: pointer;
  color: #584d66;
  @media screen and (max-width: 767px) {
    margin-top: 200px;
    display: block;
  }
`;

export const AllFavs = styled.button`
  background-color: #cccccc;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  margin-right: 20px;
  margin-top: 80px;
  padding: 8px;
  cursor: pointer;
  color: #584d66;
  transition: transform 0.2s;
  
  &:active {
      transform: scale(0.9);
    }

  @media screen and (max-width: 767px) {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

