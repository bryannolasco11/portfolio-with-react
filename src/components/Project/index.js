import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';



const Modal = ({ onClose, currentProject }) => {
    console.log(currentProject)
    const { id, name, description, githubLink, website } = currentProject;
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
                <p>{githubLink}</p>
                <p>{website}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>

        </div>

    );
}

export default Modal;