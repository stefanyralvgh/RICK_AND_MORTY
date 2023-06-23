import {
  DetailImage,
  DetailContainer,
  DetailInfo,
  DetailTitles,
  DetailButton,
  DetailTexts,
} from "./DetailStyles";
import { BiArrowBack } from "react-icons/bi";
import Loading from '../Loading/Loading';
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
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setIsDataLoading(true);
    setTimeout(() => {
      fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
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
          window.alert("ERROR");
        })
        .finally(() => {
          setIsDataLoading(false);
          setIsLoading(false);
        });
      return setCharacter({});
    }, 1000);
  }, [detailId]);
  
  return (
    <div>
      {console.log(isLoading)}
      {isLoading || isDataLoading ? (
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
                      {character.origin}
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



 