
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route
   
   
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');  //whether dark mode enable or not

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtile - Light Mode'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      document.title = 'TextUtile - Dark Mode'
      setInterval(() => {
        document.title = 'Hello downlode karo ese yr'
      }, 2000);
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <TextForm heading="Enter your text" mode={mode} />
          </Route>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;


// echo "# TestUtil-App" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:Chandra6388/TestUtil-App.git
// git push -u origin main