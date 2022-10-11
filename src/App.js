import React, { useState } from 'react';

import About from '../src/components/About'
import Portfolio from '../src/components/Portfolio';
import Header from '../src/components/Header'
import Resume from './components/Resume';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentProject] = useState([
    {
        id: 1,
        name: "WasteNot",
        description: "Project1 uses these things and does this",
    },
    {
        id: 2,
        name: "Sinato",
        description: "Project2 uses these things and does this",
    },
    {
        id: 3,
        name: "City Weather Forecaster",
        description: "Project3 uses these things and does this",
    },
    {
        id: 4,
        name: "Employee Tracker",
        description: "Project4 uses these things and does this",
    },
    {
        id: 5,
        name: "My Tech Blog",
        description: "Project5 uses these things and does this",
    },
    {
        id: 6,
        name: "Daydreaming",
        description: "Project6 uses these things and does this",
    },

]);

const [currentPage, setCurrentPage] = useState('about');
  
  return (
    <div className='App'>
      <Header
        
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
        >
      </Header>
      <main>
         {currentPage === 'about' ? (
               <About></About>
             ) : currentPage === 'portfolio' ? (
               <Portfolio currentProject={currentProject} />
             ) : currentPage === 'contact' ? (
               <Contact></Contact>
             ) : (
               <Resume></Resume>
             )
            }
       
        
      </main>
      
      
      
      
      
    </div>
  );
}

export default App;