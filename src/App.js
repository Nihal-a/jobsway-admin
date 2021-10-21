import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
