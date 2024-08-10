/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Moviecard from './Moviecard'
import { useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function handlePrevPage(){
    if(pageNo===1){
      setPageNo(pageNo)
    }else{
      setPageNo(pageNo-1)
    }
  }

  function handleNextPage(){
    setPageNo(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3e935957054458838aa7447a954fb270&language=en-US&page=${pageNo}`).then(function(res){
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

      <Pagination handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} pageNo={pageNo} />
    </>
  )
}

export default Movies

//https://api.themoviedb.org/3/movie/popular?api_key=3e935957054458838aa7447a954fb270&language=en-US&page=1