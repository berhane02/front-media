import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import Layout from './componets/layout';
import {Routes, Route} from 'react-router-dom';
import Home from './componets/home/Home';
import Header from './componets/header/Header';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("api/v1/movies");
      console.log(response.data)
      setMovies(response.data);
      
    } catch (error) {
      console.log(error)
    }
    
    
  }
  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className="App">
      <div>
        < Header />
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies}/>}></Route>

          </Route>
        </Routes>

      </div>
      
    </div>
  );
}

export default App;
