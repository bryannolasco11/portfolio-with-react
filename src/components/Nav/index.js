import React, { useState } from 'react';


function Nav (props) {
    console.log(props)
    const [navPage] = useState([
        {
            name: 'About',
            
        },
        {
           
            name: 'Portfolio'
        },
        {
            name: 'Contact'
        },
        {
           name: 'Resume'
        }


    ]);

    const {
        currentPage,
        setCurrentPage,

    } = props;

    const [currentNavPage, setCurrentNavPage] = useState(navPage[0])

    return (
        <nav bg="dark" variant="dark">
         <div class="container-fluid">
         <ul class="nav navbar-nav">
                {navPage.map((category) => (
                    < li
                    class="nav-link active" 
                        className={`${currentNavPage.name === category.name && 'navActive'
                            }`}
                        key={category.name}
                    >
                        <span 
                            onClick={() => {
                                setCurrentNavPage(category);
                                setCurrentPage(category.name);
                        }}>
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        
       </div>
       </nav>
    );
}




export default Nav;