import React from 'react';
import githubPng from '../../assets/images/social/GitHub-Mark-32px.png'

function Footer() {

    const openSite = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className='flex-row px-1' style={{ background: "#00858f" }}>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <button style={{ background: "#f9e900" }} onClick={() => openSite('https://www.linkedin.com/in/bryan-nolasco-6883342/')}>LinkedIn Profile</button>
                    </li>
                    <li className='mx-2'>
                        <button style={{ background: "#f9e900" }} onClick={() => openSite('https://github.com/bryannolasco11')}>Github link</button>
                    </li>
                    <li className='mx-2'>
                        <button style={{ background: "#f9e900" }} onClick={() => openSite('https://stackoverflow.com/')}>Stack Overflow</button>
                    </li>
                </ul>
            </nav>
        </footer>
    )

}

export default Footer;