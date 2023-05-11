import {
  DetailImage,
  DetailContainer,
  DetailInfo,
  DetailTitles,
  DetailButton,
  DetailTexts,
} from "./DetailStyles";
import { BiArrowBack } from "react-icons/bi";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)    
    // detailId
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name: char.name,
            status: char.status,
            species: char.species,
            gender: char.gender,
            origin: char.origin.name,
            image: char.image,
          });
          console.log(char);
          
        } else {
          window.alert("There are not characters with that ID");
        }
      })
      .catch((err) => {
        window.alert("hello");
      })       
      
    setIsLoading(false);
    return setCharacter({});
  }, [detailId]);
  
  


  return (
    <div>
        {isLoading === true ? (
            <Loading />
        ) : (
          <div>
              <DetailContainer>
                <DetailInfo>
                  {character.name && (
                    <DetailTexts>
                      <DetailTitles>Name:</DetailTitles> {character.name}
                    </DetailTexts>
                  )}
                  {character.status && (
                    <DetailTexts>
                      <DetailTitles>Status:</DetailTitles> {character.status}
                    </DetailTexts>
                  )}
                  {character.species && (
                    <DetailTexts>
                      <DetailTitles>Specie:</DetailTitles> {character.species}
                    </DetailTexts>
                  )}
                  {character.gender && (
                    <DetailTexts>
                      <DetailTitles>Gender:</DetailTitles> {character.gender}
                    </DetailTexts>
                  )}
                  {character.origin && (
                    <DetailTexts>
                      <DetailTitles>Origin:</DetailTitles>{" "}
                      {character.origin} {/*acá podía ser character.origin?.name*/}
                    </DetailTexts>
                  )}
                </DetailInfo>
                <DetailImage
                  src={character.image}
                  alt={`Imagen de ${character.name}`}
                />
              </DetailContainer>
              <DetailButton onClick={() => navigate("/home")}><BiArrowBack /> Back</DetailButton>
            </div>
      )}  
    
   </div>
  )
}



 