import React from 'react';
import profilePic from "../../assets/images/Profile.jpg"

function About () {
    return (
        <section>
            <h1 id="about">Who am I?</h1>
            <img src={profilePic} className='my-2' style={{ width: "25%"}} alt="profile" />
            <h3>Along with graduating from University of Wisconsin-Milwaukee, I have been concentrating on helping kids through coaching.  I started an
                AAU program, Wisconsin Havoc, and I helped young women achieve college scholarships.  Our program's mission was:<br></br><br></br>
                "The purpose of Wisconsin Havoc is player development and exposure.  We provide a competitive atmosphere where our players learn the rewards of working towards a goal, how to cooperative in a team environment, and the discipline of practice, all in the context of enjoying the game of basketball.  We want our players to wreak Havoc by attacking any obstacles they face on the court and more importantly in their daily lives.  Our players will strive to get the most out of everything they have, be thankful for what they have, accomplish their goals with integrity, and treat people the right way.  By achieving this, they will be prepared to compete with the top talent across the country and stand out in front of college coaches."<br></br><br></br>

                I changed focus and attended a bootcamp for Full Stack Web Development and I wish to bring the same principles of being thankful, treating people the right way, accomplishing goals with integirty, and striving to make the most of what I have in every coding opportunity that I come across.

            </h3>
        </section>
    );
}

export default About;