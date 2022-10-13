import React, { useState } from 'react';



import About from '../src/components/About'
import Portfolio from '../src/components/Portfolio';
import Header from '../src/components/Header'
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  


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
      <div id="page-container">
        <div id="content-wrap">
         {currentPage === 'About' ? (
               <About ></About>
             ) : currentPage === 'Portfolio' ? (
               <Portfolio />
             ) : currentPage === 'Contact' ? (
               <Contact></Contact>
             ) : (
               <Resume></Resume>
             )
            }
            </div>
            </div>
      </main>
      <Footer id="footer"></Footer>
      </div>
    
  );
}

export default App;