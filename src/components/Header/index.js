import React from 'react';
import Nav from '../Nav'

function Header(props) {

    const {
        setCurrentPage,
        currentPage
    } = props;

    return (
        <header className='flex-row px-1' style={{ background: "#8DA9c4" }}>
            <h1>
                <a href="/">
                    🏀 Bryan Nolasco 🏀
                </a>
            </h1>
            <h2>
                <Nav
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Nav>
            </h2>
        </header>
    )
}

export default Header;