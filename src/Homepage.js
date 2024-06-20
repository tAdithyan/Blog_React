import Navbar from './Navbar';
import Bloglist from './Bloglist';
import useFetch from './useFetch'
const HomePage = () => {
const {data:blogs,isloading,error} = useFetch("http://localhost:8000/blogs")
  return ( 
    <div >
       <Navbar/>
      <div className='content'>
      <h1>Homepage</h1>
   
      <p>My blogs are:</p>
      {error&&<div className='text-xs text-red-600'>{error}</div>}
      {isloading && <div >Loading...</div>}
    {blogs&&  <Bloglist blogs={blogs} title={"all blogs"} />}


      </div>
    </div>
   );
}
 
export default HomePage;