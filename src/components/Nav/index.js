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
                        <span>🏀Contact🏀</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
