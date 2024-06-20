import "./App.css";
import BlogDetails from "./BlogDetails";
import Create from "./Create";
import HomePage from "./Homepage";
import Navbar from './Navbar';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom/cjs/react-router-dom.min";
import Notfound from "./NotFound";

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Switch>
          <Route exact  path="/">
            <HomePage />
          </Route>
          <Route path="/CreateBlog">
            <Create />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
