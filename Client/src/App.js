import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';
import Favorites from './components/favorites/Favorites'


function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

  async function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';

   try {
      const response = await axios.get(`${URL}?email=${email}&password=${password}`);
      const { data } = response;
      const { access } = data;
      setAccess(access);
      if (access) {
         navigate('/home');
      }
   } catch (error) {
      console.error(error);
   }
}

   /* function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }*/

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters, setCharacters] = useState([]);


   async function onSearch(id) {
      try {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
  
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      } catch (error) {
        console.log(error);
      }
    }

  /* function onSearch(id) {
      console.log(id);
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
*/

   function onClose(id) {
      setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
   }

   const { pathname } = useLocation()

   return (
      <div className='App'>

         {pathname !== '/' ? <Nav onSearch={onSearch} /> : ''}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />

         </Routes>
      </div>
   );
}

export default App;

