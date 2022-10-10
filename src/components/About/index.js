import React from 'react';
import profilePic from "../../assets/images/Profile.jpg"

function About () {
    return (
        <section>
            <h1 id="about">Who am I?</h1>
            <img src={profilePic} className='my-2' style={{ width: "25%"}} alt="profile" />
        </section>
    );
}

export default About;