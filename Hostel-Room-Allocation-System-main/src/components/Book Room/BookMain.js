import React from 'react';
import { useNavigate } from 'react-router-dom';
import './bookmain.css';

const BookMain = () => {
  const history = useNavigate();

  return (
    <div>
      <h1 className='heading'>Book a Room</h1>
    
      
      <div className='cards-container'>
        <div className='card random' onClick={() => history('/bookroomforrandom')}>
          <h2>Book Room with Random Roommate</h2>
          <p>Get paired with a random roommate for your hostel room.</p>
          <div className='image-1'></div>
        </div>
        <div className='card friend' onClick={() => history('/bookroomwithfriend')}>
          <h2>Book Room with Friend</h2>
          <p>Book a room with a friend or roommate of your choice.</p>
          <div className='image-2'></div>
      </div>
    </div>
    </div>
  )
}

export default BookMain;
