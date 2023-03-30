// import { useNavigate } from "react-router-dom";
import { HomeImage, HomeText } from "../components/Styles";
export default function Home () {

    // const navigate = useNavigate();

    return (
        <div>
            
            <HomeText>¡Busca un personaje!</HomeText>
            <HomeImage src="./Images/RYM.png" alt="Rick y Morty" />

            {/* <div>
            <HomeButton onClick={() => navigate('/')}>⤺Back To Start</HomeButton>
            </div> */}
        </div>
    )
}