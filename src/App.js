import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './views/About/About';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import Error from './views/Error/Error';
import { useState, useEffect } from 'react';
import Favorites from './views/Favorites/Favorites';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteFavs } from './redux/actions/actions';

function App () {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const email = 'ejemplo@mail.com';
  const password = '1password';
  const dispatch =useDispatch();


  
  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);


function login(userData) {
   if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate('/home');
   }
}

function logout(){
  setAccess(false);
  navigate('/');
}


  function onClose(id) {
      setCharacters(characters.filter((element) => element.id !== id));
      dispatch(deleteFavs(id));
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
     {pathname !== '/' && <Nav onSearch={onSearch} random={random} logout={logout}/>}
      <hr />
      <Routes>
        <Route path="/" element={<Form login= {login}/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route exact path="/favorites" element={<Favorites />}></Route>
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element= {<Error />} />
      </Routes>
    </div>
  );

}


export default App;
