import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Bloglist from './Bloglist';

const HomePage = () => {

  const [blogs,setBlogs]= useState(null)
  const[isloading,setLoding]=useState(true)
  const[error,setError] = useState(null)
 
 

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogss')
        .then((res) => {
          if (res.ok) {
            return res.json();

          }
          else{
          throw Error("unable to fetch")
          }
        })
        .then((data) => {
          setBlogs(data);
          setLoding(false);
        })
        .catch(err =>{
          setError(err.message)
        })
    }, 1000);
  }, []);
  return ( 
    <div >
       <Navbar/>
      <div className='content'>
      <h1>Homepage</h1>
   
      <p>My blogs are:</p>
      {error&&<div className='text-xs text-red-600'>{error}</div>}
      {isloading && <div >Loading...</div>}
    {blogs&&  <Bloglist blogs={blogs} title={"all blogs"} />}
     {/* <Bloglist blogs={blogs.filter((value) =>value.name === "adi")} title={"marioblogs"}  handleDelte={handleDelte}/> */}


      </div>
    </div>
   );
}
 
export default HomePage;