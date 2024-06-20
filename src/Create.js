import { useState } from "react";

const Create = () => {
  const[title,settitle]=useState('');
  const[Author,setAuthor]=useState('')
  const[body,setbody]=useState('')
   
  const handleSubmit =(e) =>{
    e.preventDefault();
    const blog ={title,Author,body}
    console.log(blog);

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
   <button className="border border-red-400 rounded-xl w-16 p-2 hover:text-red-800 bg-red-400 text-white">Create</button>

   </div>

        
      </form>
    
     
    </div>
   );
}
 
export default Create;