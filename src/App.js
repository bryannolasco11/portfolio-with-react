import React, { useState } from 'react';

import About from '../src/components/About'
import Portfolio from '../src/components/Portfolio';
import Header from '../src/components/Header'
import Resume from './components/Resume';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


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
               <Portfolio></Portfolio>
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