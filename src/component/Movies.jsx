/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Moviecard from './Moviecard'
import { useEffect } from 'react'
import axios from 'axios'

const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3e935957054458838aa7447a954fb270&language=en-US&page=6`).then(function(res){
      console.log(res.data.results);
      setMovies(res.data.results)
    }, [])
  })
  return (
    <>
    <p className='text-center font-bold text-2xl my-8'> Trending Movies</p>
    <div className=' pl-8 flex flex-wrap gap-8'>

      {movies.map((movie, index)=>{
        return <Moviecard key={index}  poster_path={movie.poster_path} name={movie.original_title}/>
      })}
      
    </div>

    </>
  )
}

export default Movies

//https://api.themoviedb.org/3/movie/popular?api_key=3e935957054458838aa7447a954fb270&language=en-US&page=1