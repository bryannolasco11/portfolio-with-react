import React, { useState } from 'react';


function Nav(props) {
    console.log(props)
    const [navPage] = useState([
        {
            name: 'About',
            title: '🏀About'
        },
        {
            name: 'Portfolio',
            title: '🏀Portfolio'
        },
        {
            name: 'Contact',
            title: '🏀Contact'
        },
        {
            name: 'Resume',
            title: '🏀Resume🏀'
        }


    ]);

    const {
        
        setCurrentPage,

    } = props;

    const [currentNavPage, setCurrentNavPage] = useState(navPage[0])

    return (
        <nav bg="dark" variant="dark">
            <div className="container-fluid">
                <ul className='flex-row'>
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
                                {category.title}
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
}




export default Nav;