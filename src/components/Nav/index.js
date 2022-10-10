import React, { useState } from 'react';


function Nav(props) {
    console.log(props)
    const [navPage] = useState([
        {
            name: 'about',
            title: '🏀About Me🏀'
        },
        {
            name: 'portfolio',
            title: '🏀Portfolio🏀'
        },
        {
            name: 'contact',
            title: '🏀Contact🏀'
        },
        {
            name: 'resume',
            title: '🏀Resume🏀'
        }


    ]);

    const {
        currentPage,
        setCurrentPage,

    } = props;

    const [currentNavPage, setCurrentNavPage] = useState(navPage[0])

    return (
        <nav>
            <ul>
                {navPage.map((category) => (
                    < li
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
        </nav>
    );
}




export default Nav;