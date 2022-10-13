import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';



const Modal = ({ onClose, currentProject }) => {
    console.log(currentProject)
    const { id, name, description, githubLink, website } = currentProject;
    
    const openGithub = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const openWebsite = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    
    return (
        // JSX
        <div className="modalBackdrop">
            <div className='modalContainer'>
                <h3 className="modalTitle">{name}</h3>
                <li key={id}>
                    <img
                        src={require(`../../assets/images/projectScreenshots/${id}.png`)}
                        alt={name}
                        width="800"
                        height="452"
                    />
                </li>
                <p>{description}</p>
                <div className='flex-row space-between'>
                
                <button className= "button" onClick={() => openGithub(`${githubLink}`)}>GitHub Repository</button>
                    <button className= "button" onClick={() => openWebsite(`${website}`)}>Website</button>
                <button className="button" type="button" onClick={onClose}>
               Return to Portfolio
                </button>
                
                    
                </div>
            </div>

        </div>

    );
}

export default Modal;