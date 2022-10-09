import React from 'react';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>
                            🏀About Me🏀
                        </a>
                    </li>
                    <li>
                        <a href='#contact'>
                            🏀Contact🏀
                            </a>
                    </li>
                    <li>
                        <a href='#portfolio'>
                            🏀Portfolio🏀
                            </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
