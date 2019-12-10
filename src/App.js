import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import NavContainer from './Navbar/Containers/NavContainer';
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
      <div className="App">
          <header>Song Reviewer</header>
          <Router>
              <NavContainer/>
          </Router>
      </div>
  );
}

export default App;
