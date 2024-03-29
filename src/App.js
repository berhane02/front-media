import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import Layout from './componets/layout';
import {Routes, Route} from 'react-router-dom';
import Home from './componets/home/Home';
import Header from './componets/header/Header';
import Trailer from './componets/trailer/Trailer';
import Reviews from './componets/reviews/Reviews';
import NotFound from './componets/notFound/NotFound';
import { listOfMovies } from './componets/caching/listOfMovies';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);


  const getMovies = async () => {
    try {
      const response = await api.get("api/v1/movies");
      setMovies(response.data);
      
    } catch (error) {
      console.log(error)
    }
    
    
  }
  const getMovieData = async(movieId) => {
    try {
        const response = await api.get(`/api/v1/movies/${movieId}`);
        const singleMovie = response.data;
        setMovie(singleMovie)
        setReviews(singleMovie.reviewIds)
    } catch (error) {
        console.log(error)
    }
  }
  
  useEffect(()=>{
    setMovie(listOfMovies)
    getMovies();
  },[])
  return (
    <div className="App">
      <div>
        < Header />
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies}/>}></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
        </Routes>

      </div>
      
    </div>
  );
}

export default App;
