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
            githubLink: "https://github.com/bryannolasco11/WasteNot",
            website: "https://crackerbox123.github.io/WasteNot/"
        },
        {
            id: 2,
            name: "Sinato",
            description: "Project2 uses these things and does this",
            githubLink: "https://github.com/bryannolasco11/sinato",
            website: "https://sinato.herokuapp.com/"
        },
        {
            id: 3,
            name: "City Weather Forecaster",
            description: "Project3 uses these things and does this",
            githubLink: "https://github.com/bryannolasco11/City-Weather-Forecaster",
            website: "https://bryannolasco11.github.io/City-Weather-Forecaster/"
        },
        {
            id: 4,
            name: "Employee Tracker",
            description: "Project4 uses these things and does this",
            githubLink: "https://github.com/bryannolasco11/employee-tracker",
            website: "https://www.youtube.com/watch?v=jENjyVRw5HA"
        },
        {
            id: 5,
            name: "My Tech Blog",
            description: "Project5 uses these things and does this",
            githubLink: "https://github.com/bryannolasco11/tech-blog",
            website: "https://salty-gorge-96527.herokuapp.com/"
        },
        {
            id: 6,
            name: "Daydreaming",
            description: "Project6 uses these things and does this",
            githubLink: "https://github.com/bryannolasco11/daydreaming",
            website: "https://www.youtube.com/watch?v=FtgykxrPD80"
        },
    
    ]);
    
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