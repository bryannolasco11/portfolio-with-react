import React from 'react'

import resume from "../../assets/images/Resume.png"
function Resume() {
    const resumepdf = require('../../assets/Bryan_Nolasco_Resume.pdf')

    return (
        <section>
            <div className="container">
                <div className="row">
                    <img src={resume} className='my-2' style={{ width: "40%" }} alt="resume" />
                    <h3>View and Download my <span><a href={resumepdf} target='blank'>Resume</a></span></h3>


                    <h1>My Proficencies:</h1>
                    <ul>
                        <h2>Front End:</h2>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>JQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>

                        <h2>Back End:</h2>
                        <li>APIs</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySql</li>
                        <li>Sequalize</li>
                        <li>MondgoDB</li>
                        <li>Mongoose</li>

                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Resume;