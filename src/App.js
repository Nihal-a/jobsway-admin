import { BrowserRouter as Router} from 'react-router-dom'
import Routed from './Routed';


function App() {

  return (
    <div className="App">
      <Router>
        <Routed />
      </Router>
    </div>
  );
}

export default App;
