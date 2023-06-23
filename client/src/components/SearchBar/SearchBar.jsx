import React, { useState } from "react";
import {
  SearchInput,
  SearchBtn,
  // SearchImage,
  RandomBtn,
  SearchContainer,
} from "./SearchBarStyles";
import { BiSearch } from "react-icons/bi";

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
      <SearchInput
        type="search"
        placeholder="Character ID"
        value={inputContent}
        onChange={handleSearch}
        onKeyDown={handleInputKeyDown}
      ></SearchInput>

      <SearchBtn onClick={handleSearchClick}>
        <BiSearch />
      </SearchBtn>
      <RandomBtn onClick={props.random}>
        <img src="./Images/Home.png" alt="Random button" />
      </RandomBtn>
    </SearchContainer>
  );
}
