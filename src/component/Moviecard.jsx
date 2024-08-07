/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Moviecard = ({poster_path, name}) => {
  return (
    <div className='w-[180px] h-[60vh] bg-cover bg-center rounded-xl hover:scale-110 transition duration-300 flex items-end '  style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

      <div className='w-full text-center text-white text-xl bg-gray-900/60 '>
        {name}
      </div>

    </div>
  )
}

export default Moviecard