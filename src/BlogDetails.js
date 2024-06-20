import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const BlogDetails = () => {
  const history = useHistory()

  const {id} =useParams()
  const {data,isloading,error} = useFetch(`http://localhost:5000/blogs/${id}`)
  const handleDelete =(id)=>{
    fetch(`http://localhost:5000/blogs/${id}`,
    {
      method:"DELETE"
    }
    ).then(()=>{
      console.log(id);
      history.push("/")
    })
  
    


}

  return ( 
    <div>
      {isloading&& <div>Loading...</div>}
      {error&& <div>{error}</div>}
      {data&&(
        <article className="text-red-300 m-80">
         <h1 className="text-bold text-5xl text-black underline">{data.title}</h1>
         <p className="italic text-2xl text-red-800">{data.author}</p> 
         <p> {data.body}</p>
         <button className='border bg-red-400 text-white rounded-lg p-2' onClick={()=>handleDelete(data.id)}>Delete</button>

        </article>
        
      )}
    </div>
   );
}
 
export default BlogDetails;