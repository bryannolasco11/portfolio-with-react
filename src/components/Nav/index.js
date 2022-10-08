import React from 'react';


function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    🏀 Bryan Nolasco 🏀
                </a>
            </h2>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>
                            🏀About Me🏀
                        </a>
                    </li>
                    <li>
                        <span>🏀Contact🏀</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
