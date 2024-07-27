/* eslint-disable no-unused-vars */
import React from 'react'
import Moviecard from './Moviecard'

const Movies = () => {
  return (
    <>
    <p className='text-center font-bold text-2xl my-8'>Trending Movies</p>
    <div className=' pl-8 flex flex-wrap gap-8'>
      
      <Moviecard />
      <Moviecard />
      <Moviecard />
      <Moviecard />
      <Moviecard />
      <Moviecard />
      <Moviecard />
      <Moviecard />
      <Moviecard />
      <Moviecard />
      <Moviecard />
      <Moviecard />
      <Moviecard />
    </div>

    </>
  )
}

export default Movies