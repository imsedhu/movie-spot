/* eslint-disable no-unused-vars */
import React from 'react'

const Pagination = () => {
  return (
    <div className='w-full bg-gray-800/60 flex justify-center py-3 my-3'>
      <div className='px-8 text-xl hover:cursor-pointer'><i className="fa-solid fa-arrow-left"></i></div>
      <div className='text-xl'>1</div>
      <div className='px-8 text-xl hover:cursor-pointer'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination