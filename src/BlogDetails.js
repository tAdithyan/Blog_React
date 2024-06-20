import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const {id} =useParams()
  const {data,isloading,error} = useFetch(`http://localhost:5000/blogs/${id}`)


  return ( 
    <div>
      {isloading&& <div>Loading...</div>}
      {error&& <div>{error}</div>}
      {data&&(
        <article className="text-red-300 m-80">
         <h1 className="text-bold text-5xl text-black underline">{data.title}</h1>
         <p className="italic text-2xl text-red-800">{data.author}</p> 
         <p> {data.body}</p>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;