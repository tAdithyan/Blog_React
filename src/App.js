import "./App.css";
import Create from "./Create";
import HomePage from "./Homepage";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact  path="/">
            <HomePage />
          </Route>
          <Route path="/Create">
            <Create />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
