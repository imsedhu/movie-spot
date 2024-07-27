/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center border-4 '>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoU7l4feZpd5g2O8XqlZ2zb37--7bHBXK5tw&s" className='w-[70px] ' alt="" />

      <Link to="/" className='text-2xl font-bold text-blue-500 px-5 hover:underline'>Movies</Link>

      <Link to="/watchlist" className='text-2xl font-bold text-blue-500 hover:underline'>Watchlist</Link>
    </div>
  )
}

export default Navbar