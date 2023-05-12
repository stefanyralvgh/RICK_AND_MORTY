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
import axios from 'axios';



function App () {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  
  const navigate = useNavigate();
  const dispatch =useDispatch();

  useEffect(() => {
    if (access && pathname === '/') {
      navigate('/home');
    }
  }, [access, navigate, pathname]);
  

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

 
async function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  
  try {
    const { data } = await axios.get(`${URL}?email=${email}&password=${password}`);
    setAccess(data);
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while trying to login.");
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


  async function onSearch(id) {
    try {
      const response = await fetch(`http://localhost:3001/rickandmorty/character/${id}`);
      if (response.ok) {
        const data = await response.json();
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Duplicate character, please try another ID");

          setTimeout(function() {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "auto"
            });
          }, 500);
        } 
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There are no characters with that ID.");
    }
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
