import './App.css';
import React, { Component} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component{

  render(){
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<News key="general" category="general" />} />
            <Route path="/sports" element={<News key="sports" category="sports" />} />
            <Route path="/science" element={<News key="science" category="science" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}








///397b69e21636431c82fc01527825b580