import styled from "styled-components"

export default function Landing () {
const LandingImage = styled.img `
    margin-top: 140px;
`;

    return (
        <div>
            <LandingImage src="./Images/RYM.PNG" alt="Rick Y Morty" />
        </div>
    )
}