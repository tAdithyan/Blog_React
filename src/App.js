import "./App.css";
import Create from "./Create";
import HomePage from "./Homepage";
import Navbar from './Navbar';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom/cjs/react-router-dom.min";

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
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
