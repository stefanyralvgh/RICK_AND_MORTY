import React, { useState } from "react";
import {
  SearchInput,
  SearchBtn,
  // SearchImage,
  RandomBtn,
  SearchContainer,
} from "./SearchBarStyles";

export default function SearchBar(props) {
  const [inputContent, setInputContent] = useState("");

  function handleSearch(event) {
    let { value } = event.target;
    setInputContent(value);    
  }

  const handleInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      // 13 es el keyCode para la tecla Enter
      props.onSearch(inputContent);
      setInputContent("");
    }
  };

  const handleSearchClick = () => {
    props.onSearch(inputContent);
    setInputContent("");
  };
 
  return (
      <SearchContainer>
        {/* <SearchImage src="./Images/RyM-Navbar.png" alt="Rick y Morty" /> */}
        <SearchInput
          type="search"
          placeholder="Character ID"
          value={inputContent}
          onChange={handleSearch}
          onKeyDown={handleInputKeyDown}
        ></SearchInput>

        <SearchBtn onClick={handleSearchClick}>🔍</SearchBtn>
        <RandomBtn onClick={props.random}>
          {/* <img src="./Images/gunnn.png" alt="Random button" /> */}
          <img src="./Images/Home.png" alt="Random button" />
        </RandomBtn>
      </SearchContainer>
   
  );
}
