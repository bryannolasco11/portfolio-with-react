import React from 'react';
import Nav from '../Nav'

function Header(props) {

    const {
        setCurrentPage,
        currentPage
    } = props;

    return (
        <header>
            <h1>
                <a href="/">
                    🏀 Bryan Nolasco 🏀
                </a>
            </h1>
            <h2>
                <Nav
                    setCurrentPage={ setCurrentPage }
                    currentPage={ currentPage }
                ></Nav>
            </h2>
        </header>
    )
}

export default Header;