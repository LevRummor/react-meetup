import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => (
  <div>
      <Navbar />
      <div className="container">
        <Main />
      </div>
      <div className="fixed-action-btn">
        <Link to="/meetups/add" className="btn-floating btn-large waves-effect waves-dark red z-depth-3">
          <i className="fa fa-plus fa-2x"></i>
        </Link>
      </div>
  </div>
)

export default App;