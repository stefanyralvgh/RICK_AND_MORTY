import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './views/About';
import Landing from './views/Landing';
import Detail from './views/Detail';
import Error from './views/Error';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App () {
  const [characters, setCharacters] = useState([]);

  function onClose(id) {
      setCharacters(characters.filter((element) => element.id !== id));
    };


  function random(){
    let randomChar = Math.floor(Math.random()*826);
    onSearch(randomChar);
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID.");
        } else {
          alert("No hay personajes con ese ID.");
        }
      });
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} random={random}/>
      <hr />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/about" element={<About />} />   
        <Route path='/*' element={<Error />} />    
      </Routes>
    </div>
  );

}


export default App;
