import React from 'react'

const Bloglist = ({blogs,title}) => {
  return (
    <div>
      <h1 className='text-red-400 text-4xl underline'>{title}</h1> 
      {blogs.map((value)=>(
      <div key={value.id} className='flex gap-8'>
          <p>{value.title}</p>
          <p>{value.body}</p>

      </div>
    
    ))}</div>
  )
}

export default Bloglist