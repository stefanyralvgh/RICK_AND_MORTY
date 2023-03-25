import styled from "styled-components";


export const Name = styled.h2`
    font-size: 2em;
    font-weight: bolder;
`;


export const Species = styled.h2`
    font-weight: bold;
    color: #4e2970;
`;


export const Gender = styled.h2`
    font-weight: bold;
    color: #4e2970;
`;


export const CardContenedor = styled.div`
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
        ${Name} { 
                color: #e6e3e8;
        }
        ${Species} { 
                color: #dccdf8;
        }
        ${Gender} { 
                color: #dccdf8 ;
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

export const CloseButtonCard = styled.button`
    border-color: transparent;
    background-color: #8b7f9c;
    color: #8b7f9c;
  
    
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 9px;

`