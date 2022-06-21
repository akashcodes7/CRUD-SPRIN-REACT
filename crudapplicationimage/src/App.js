import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GetEmployee from './Components/GetEmployee';
import EditEmployee from './Components/EditEmployee';

function App() {
  return (
    <Router>
        <div className="container">
          <Routes>
             <Route exact path="/add-employee"  element={<Home />} />
             <Route exact path="/edit-employee"  element={<EditEmployee />} />
             <Route exact path="/"  element={<GetEmployee />} />
            
          </Routes>
        </div>
    </Router>
    
  );
}

export default App;
