import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./bookmain.css";

const BookMainUsingRS = () => {
  const history = useNavigate();
  const paramsData = useParams().idOfRoomAndRoomNo;
  var id = paramsData.split("&")[0];
  var roomNo = paramsData.split("&")[1];

  return (
    <div>
      <h1 className='heading'>Book a Room</h1>

      <div className='cards-container'>
        <div className='card random' onClick={() => history(`/roomStatus/random/${paramsData}`)}>
          <h2>Book Room with Random Roommate</h2>
          <p>Get paired with a random roommate for your hostel room.</p>
          <div className='image-1'></div>
        </div>
        <div className='card friend' onClick={() => history(`/roomStatus/friend/${paramsData}`)}>
          <h2>Book Room with Friend</h2>
          <p>Book a room with a friend or roommate of your choice.</p>
          <div className='image-2'></div>
        </div>
      </div>
    </div>
  )
}

export default BookMainUsingRS;
