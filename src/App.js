import React, { useState } from 'react';


import About from '../src/components/About'
import Portfolio from '../src/components/Portfolio';
import Header from '../src/components/Header'
import Resume from './components/Resume';
import Contact from './components/Contact';
import Particles from "react-tsparticles";


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

const [currentPage, setCurrentPage] = useState('About');


  return (

    <div style={{ 
      width: "100%",
      backgroundColor: '#0a1045' 
      }}>
      <Header
        
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
        >
      </Header>
      <main style={{ background: "0a1045"}}>
         {currentPage === 'About' ? (
               <About></About>
             ) : currentPage === 'Portfolio' ? (
               <Portfolio currentProject={currentProject} />
             ) : currentPage === 'Contact' ? (
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