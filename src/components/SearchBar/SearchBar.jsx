import React from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    
    <div className={style.searchcontainer}>
      <input className={style.searchinput} type="search" placeholder="ID del personaje"/>
      <button
        className={style.searchbtn}
        onClick={() => props.onSearch("hola")}>
        🔍
      </button>
    </div> 
 
  );
}
