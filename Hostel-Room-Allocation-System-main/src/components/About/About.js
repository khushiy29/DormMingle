import React from 'react';
import './About.css';


const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="about-me-content">
                <p className='content'>Welcome to our hostel room allocation system!</p>
                <p>We are dedicated to providing an efficient and hassle-free experience for students seeking accommodation. Our platform offers various features to streamline the process of booking hostel rooms and finding roommates.</p>
                <p>Our hostel offers 2 sharing rooms, providing a comfortable living space for students. Whether you prefer to be paired with a random roommate or choose your own friend as a roommate, our system caters to your needs.</p>
                <p>Our mission is to create a comfortable and conducive living environment for students, ensuring they have a pleasant stay throughout their academic journey.</p>
                <p>Feel free to explore our website and discover the benefits of using our hostel room allocation system.</p>
            </div>
            <h2>About Me</h2>
            <div className="about-me-content">
                <p>As a developer, I am passionate about creating solutions that make life easier. I have a keen interest in web development and enjoy using my skills to contribute to the exciting technological advances that happen every day at our hostel room allocation system.</p>
                <p>I believe in the power of programming to transform and improve the lives of people around the world.</p>
            </div>
        </div>
    );
};



export default About;
