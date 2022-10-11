import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';



const Modal = ({ onClose, currentProject }) => {
    console.log(currentProject)
    const { id, name, description } = currentProject;
    return (
        // JSX
        <div className="modalBackdrop">
            <div className='modalContainer'>
                <h3 className="modalTitle">{name}</h3>
                <li key={id}>
                    
                    {description}
                    <img
                        src={require(`../../assets/images/projectScreenshots/${id}.png`)}
                        alt={name}
                    />
                </li>
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>

        </div>

    );
}

export default Modal;