import { useState,useEffect } from "react";

const useFetch =(url)=>{

  const [data,setData]= useState(null)
  const[isloading,setLoding]=useState(true)
  const[error,setError] = useState(null)
 
 

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();

          }
          else{
          throw Error("unable to fetch")
          }
        })
        .then((data) => {
          setData(data);
          setLoding(false);
        })
        .catch(err =>{
          setError(err.message)
        })
    }, 1000);
  }, [url]);
  return {data,isloading,error}
}
 export default useFetch;