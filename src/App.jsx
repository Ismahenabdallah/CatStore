import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Navbars from './components/Navbars.jsx';
import {BrowserRouter as Router,} from 'react-router-dom';

  function App() {
    return (
      <div className="container">
        <Router>
          <Navbars />
        </Router>
      </div>
    );
  }

export default App;
