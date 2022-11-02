import React, { useState } from 'react';
import Modal from '../Project';

function Portfolio(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();

    const [currentProjects] = useState([
        {
            id: 1,
            name: "WasteNot",
            description: "WasteNot - An Application that allows you to get creative with the ingredients left in your pantry. Search by ingredient and get a list Spoonacular Recipes and CocktailDB recipes that compose of the ingredient you choose.",
            githubLink: "https://github.com/bryannolasco11/WasteNot",
            website: "https://crackerbox123.github.io/WasteNot/"
        },
        {
            id: 2,
            name: "BIOS",
            description: "This application is a planner where Users can add Todos and assign values od daily, weekly, monthly or yearly.  In the future, a budget will be added.",
            githubLink: "https://github.com/oceanlatte/bios-planner",
            website: "https://sinato.herokuapp.com/"
        },
        {
            id: 3,
            name: "City Weather Forecaster",
            description: "This is a weather dashboard. It fetches data from a the server side API OpenWeather. The user will input a city and the current conditions and a five day forecast will be displayed. Also, the dashboard will keep track of the the searches since they will be stored in local storage. The last 9 searches will be displayed and the buttons will be clickable so that the user is able to get the conditions of those cities quickly. Finally, the UV index will be accompanied by color to display if the conditions are favorable, moderate, or severe.",
            githubLink: "https://github.com/bryannolasco11/City-Weather-Forecaster",
            website: "https://bryannolasco11.github.io/City-Weather-Forecaster/"
        },
        {
            id: 4,
            name: "Employee Tracker",
            description: "This is a program to be used on the command line where the user can create a business structure though department, roles, and employees. You are able to add each, udate, view, and delete.",
            githubLink: "https://github.com/bryannolasco11/employee-tracker",
            website: "https://www.youtube.com/watch?v=jENjyVRw5HA"
        },
        {
            id: 5,
            name: "My Tech Blog",
            description: "This is a full stack program that utilizes both the front end and the backend of development. It is a Tech Blog where users can create logins, and post news about Tech. They are able to also about to comment on posts. Using a dashboard, a user can see how many posts he has created.",
            githubLink: "https://github.com/bryannolasco11/tech-blog",
            website: "https://salty-gorge-96527.herokuapp.com/"
        },
        {
            id: 6,
            name: "Daydreaming",
            description: "This is the back end of a social media app where users can post thoughts, add reactions, and add friends.",
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
            <div>

                <ul>
                    {currentProjects.map((project) => {
                        return (
                            <div>
                                <li>
                                    <h3>{project.name}</h3>

                                    <img
                                        src={require(`../../assets/images/projectScreenshots/${project.id}.png`)}
                                        alt={project.name}
                                        className="img-thumbnail mx-1"
                                        onClick={() => toggleModal(project)}
                                        key={project.id}
                                        width="300"
                                        height="169"
                                    />
                                </li>
                            </div>
                        )
                    })}

                </ul>

            </div>
        </section>
    );
}

export default Portfolio;