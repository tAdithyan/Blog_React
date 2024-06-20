import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='Navbar flex justify-evenly items-center border h-16'>
      <h1 className='text-red-300 text-4xl'>My app</h1>
      <div className="gap-4 flex text-red-400">
        <Link to="/" >Home</Link>
        <Link to="/CreateBlog" >CreateBlog</Link>
       
      </div>

    </nav>
  )
}

export default Navbar