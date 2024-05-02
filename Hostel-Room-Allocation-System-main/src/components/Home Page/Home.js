

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


const Home = () => {
  const history = useNavigate();

  return (
    <div>
    <div className="container">
      <div classname='home-text'>
        <p className='hero-text'>Tired of waiting in long lines while booking a room in your hostel?</p>
        <p className='hero-text1'>Worry no more! We have a solution for you.</p>
        <p className='hero-text2'>Personalized Roommate Pairing</p>
      </div>
      <div className='line-img'>
        <img src="https://media.istockphoto.com/id/1143717825/vector/full-length-of-cartoon-people-standing-in-line.jpg?s=612x612&w=0&k=20&c=Qa5rNpLHK1NcQGAwa9gzvZBX2HIRocr6iCFbgqS1eGg=" alt="line" />
      </div>
    </div>
    <div className="container1">
      <h1 className="title1">Experience the new way of Hostel allocation system</h1>
      <div className="button-container">
        <button onClick={() => history('/roomstatus')} className="btn room-status">
          Check Room Status
        </button>
        <button onClick={() => history('/bookroom')} className="btn book-room">
          Book Room
        </button>
      </div>
     
    </div>
    </div>
  );
};

export default Home;
