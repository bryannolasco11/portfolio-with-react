import React from 'react';
import Nav from './components/Nav';
import About from './components/AboutMe';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
     <main>
       <About></About>
     </main>
    </div>
  );
}

export default App;
