import { useState } from "react";

const Create = () => {
  const[title,settitle]=useState('');
  const[Author,setAuthor]=useState('')
  const[body,setbody]=useState('');
  const[pending,setPending]=useState(false)
   
  const handleSubmit =(e) =>{
    e.preventDefault();
    const blog ={title,Author,body}
    setPending(true)
    setTimeout(() => {
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
        })
        .catch(error => {
          console.error("Error:", error);
          setPending(false);
        });
    }, 2000);
 


  }
  return ( 
    <div className="Create justify-center flex items-center flex-col gap-4 mt-5">
      <h1 className="text-xl text-red-500  ">Create new Blog</h1>
      <form  className="flex-col flex " onSubmit={handleSubmit}>
        <label htmlFor="blogtitle" className="text-red-400 italic">Enter Title of the blog:</label>
        <input type="text" required  className="border border-red-400 rounded-xl p-2 m-2" value={title} onChange={(e)=>settitle(e.target.value)}/>
        <label htmlFor="blogtitle" className="text-red-400 italic">Enter Author of the blog:</label>
        <input type="text" required  className="border border-red-400 rounded-xl p-2 m-2" value={Author} onChange={(e)=>setAuthor(e.target.value)}/>
        <label htmlFor="blogtitle" className="text-red-400 italic">Enter Title of the blog:</label>
        <textarea className="border border-red-400 rounded-xl p-2 m-2" required value={body} onChange={(e)=>setbody(e.target.value)}></textarea>
   <div className=" justify-center flex">
  { !pending? <button className="border border-red-400 rounded-xl w-16 p-2 hover:text-red-800 bg-red-400 text-white">Create</button>:<button className="border border-red-400 rounded-xl w-32 p-2 hover:text-red-800 bg-red-400 text-white" disabled>Creating...!</button>}


   </div>

        
      </form>
    
     
    </div>
   );
}
 
export default Create;