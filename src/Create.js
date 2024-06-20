import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const Create = () => {
  const[title,settitle]=useState('');
  const[author,setAuthor]=useState('')
  const[body,setbody]=useState('');
  const[pending,setPending]=useState(false)
  const history = useHistory();
  const[isError,setError]=useState(false)
   
  const handleSubmit =(e) =>{
    e.preventDefault();
    const blog ={
     title,author,body
    }
    console.log(blog);
    setPending(true)
    
      fetch("http://localhost:5000/blogs", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(' response was not get');
          }
          return response.json();
        })
        .then(data => {
          console.log("Blog added:", data);
          setPending(false);
          history.push("/")
        
        })
        .catch(error => {
          console.error("Error:", error);
          setPending(false);
          setError(true)
        });
    
 


  }
 
  return ( 
    <div className="Create justify-center flex items-center flex-col gap-4 mt-5">
      <h1 className="text-xl text-red-500  ">Create new Blog</h1>
      <form  className="flex-col flex " onSubmit={handleSubmit}>
        <label htmlFor="blogtitle" className="text-red-400 italic">Enter Title of the blog:</label>
        <input type="text" required  className="border border-red-400 rounded-xl p-2 m-2" value={title} onChange={(e)=>settitle(e.target.value)}/>
        <label htmlFor="blogtitle" className="text-red-400 italic">Enter author of the blog:</label>
        <input type="text" required  className="border border-red-400 rounded-xl p-2 m-2" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <label htmlFor="blogtitle" className="text-red-400 italic">Enter Title of the blog:</label>
        <textarea className="border border-red-400 rounded-xl p-2 m-2" required value={body} onChange={(e)=>setbody(e.target.value)}></textarea>
   <div className=" justify-center flex">
  { !pending? <button className="border border-red-400 rounded-xl w-16 p-2 hover:text-red-800 bg-red-400 text-white">Create</button>:<button className="border border-red-400 rounded-xl w-32 p-2 hover:text-red-800 bg-red-400 text-white" disabled>Creating...!</button>}

 {isError && <p className="text-red-800">Something Went wrong</p>}
   </div>

        
      </form>
    
     
    </div>
   );
}
 
export default Create;