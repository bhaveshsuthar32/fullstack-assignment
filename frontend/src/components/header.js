import React from 'react'
import { Link } from 'react-router-dom'


export default function header() {
  return (
    <>
      <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        
      <Link to={"/"}>

          <span className="font-bold text-xl">Abstract</span>
          <span className="text-xl">|</span>
          <span className="text-xl">Help Center</span>
      </Link>
        </div>
        <Link to="/addCards">
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
          Submit a request
        </button>
        </Link>
      </header>
    </>
  )
}
