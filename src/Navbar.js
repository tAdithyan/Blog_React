import React from 'react'

const Navbar = () => {
  return (
    <nav className='Navbar flex justify-evenly items-center border h-16'>
      <h1 className='text-red-300 text-4xl'>My app</h1>
      <div className="gap-4 flex text-red-400">
        <a href="/" className=' hover:text-red-600'>Home</a>
        <a href="/CreateBlog" className=' hover:text-red-600'>CreateBlog</a>
       
      </div>

    </nav>
  )
}

export default Navbar