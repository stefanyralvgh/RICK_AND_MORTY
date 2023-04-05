import styled from "styled-components";


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
  
  position: fixed;
bottom: 10px;
right: 10px;


  padding: 10px 20px;
  display: flex;
  flex: start;
  padding: 0.5rem;
  font-size: smaller;
  border-radius: 5px;
  border: none;
  background-color: #6666ff;
  color: white;
  cursor: pointer;
  
  

  &:hover {
    background-color: #ccccff;
  }
  `;