import React, { useState } from 'react';
import Modal from '../Project';

function Portfolio(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();

    const [currentProjects] = useState([
        {
            id: 1,
            name: "WasteNot",
            description: "Project1 uses these things and does this",
        },
        {
            id: 2,
            name: "Sinato",
            description: "Project2 uses these things and does this",
        },
        {
            id: 3,
            name: "City Weather Forecaster",
            description: "Project3 uses these things and does this",
        },
        {
            id: 4,
            name: "Employee Tracker",
            description: "Project4 uses these things and does this",
        },
        {
            id: 5,
            name: "My Tech Blog",
            description: "Project5 uses these things and does this",
        },
        {
            id: 6,
            name: "Daydreaming",
            description: "Project6 uses these things and does this",
        },
    
    ]);
    
    //const currentId = currentProjects.filter(proj => proj.id === id);
    
    
    const toggleModal = (project, i) => {
        setCurrentProject({ ...project, index: i });
        setIsModalOpen(!isModalOpen)
    }

    return (
        
        <section>
            {isModalOpen && (
            <Modal onClose={toggleModal} currentProject={currentProject} />
            )}
            <ul>
                {currentProjects.map((project) => {
                    return(
                        <li key={project.id}>
                            {project.name}
                            
                            <img
                        src={require(`../../assets/images/projectScreenshots/${project.id}.png`)}
                        alt={project.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(project)}
                        key={project.id}
                    />
                        </li>
                        
                    )
                })}
            </ul>

        </section>
    );
}

export default Portfolio;