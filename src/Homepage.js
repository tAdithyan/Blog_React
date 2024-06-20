import Bloglist from './Bloglist';
import useFetch from './useFetch'
const HomePage = () => {
 
const {data:blogs,isloading,error} = useFetch("http://localhost:5000/blogs")
  return ( 
    <div >
     
      <div className='content'>
   
   
      {isloading && <div >Loading...</div>}
      {error&&<div className='text-xs text-red-600'>{error}</div>}
      <p>My blogs are:</p>

    {blogs&&  <Bloglist blogs={blogs} title={"all blogs"} />}


      </div>
    </div>
   );
}
 
export default HomePage;