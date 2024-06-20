import { Link } from "react-router-dom/cjs/react-router-dom";
const Notfound = () => {
  return ( 
    <div className="items-center justify-center flex  h-screen bg-red-100 flex-col">
      <p  className="text-red-400 font-bold text-5xl">NotFound..!</p>
      <Link to ="/"> 
      <p className="text-blue-800 border underline italic p-2">Go To Home Page...!</p>
      </Link>
    </div>
   );
}
 
export default Notfound;