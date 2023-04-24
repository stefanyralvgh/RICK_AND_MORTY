import styled from "styled-components";

export const HomeText = styled.h1 `
    color: #dccdf8;
    font-size:2rem ;
    text-shadow: 2px 2px #333;
    padding-top: 70px;

    @media screen and (max-width: 767px) {
        width: 100%;
        margin: 0 auto;
        padding-top:200px ;
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
        width: 90%;
        margin: 0 auto;
    }

    @media screen and (min-width: 1280px) {
        width: 45%;
        max-width: 400px;
        margin: 0 auto;
    }

`;

export const HomeImage = styled.img `
   margin-top: 30px;
   margin-bottom: 0%;
   @media screen and (max-width: 767px) {
        width: 90%;
        margin: 0 auto;
    }
`;