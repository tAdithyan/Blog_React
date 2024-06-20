import './App.css';
import HomePage from './Homepage';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  
  return (
    <Router>
    <div >
      <Switch>
        <Route path="/">
    <HomePage/>
    </Route>
    </Switch>
 
 
    </div>
    </Router>
  );
}

export default App;
