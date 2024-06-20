import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Bloglist = ({blogs,title}) => {
  
 
  return (
    <div>
      <h1 className='text-red-400 text-4xl underline'>{title}</h1> 
      {blogs.map((value)=>(
      <div key={value.id} className='flex gap-8 border p-3 items-center'>
        <Link to={`/blog/${value.id}`}>
          <p className='text-3xl text-red-800'>{value.title}</p>
          <p className='text-xl text-green-500 italic '>Author:{value.author}</p>
          </Link>
      </div>
    
    ))}</div>
  )
}

export default Bloglist