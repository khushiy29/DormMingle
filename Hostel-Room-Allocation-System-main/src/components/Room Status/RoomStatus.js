import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const RoomStatus = () => {
    const history = useNavigate();
    const [roomStatus, setRoomStatus] = useState([]);

    const sendRequest = async () => {
        const res = await axios.get('http://localhost:3000/api/v1/getAllocatedRooms').catch((err) => console.log(err));
        const data = await res.data;
        console.log(res);
        return data;
    }

    useEffect(() => {
        sendRequest().then((data) => {
            // console.log(data);
            setRoomStatus(data);
        });
    }, []);

    return (
        <>
        <div class='room-status-main'>
            <div className='room-status-text'>
                <p className='status-head'>Check room status and book your room by clicking on either the yellow or red box of the room of your choice.</p>
            </div>
            <div className='color-info'>
                <p>Red for Occupied Rooms</p><div className='colorinfo1'></div>
                <p>Yellow for Partially Vacant Rooms</p><p className='colorinfo2'></p>
                <p>Green for Vacant Rooms</p><p className='colorinfo3'></p>
            </div>
            <div className='layout-container'>
                <div className='column1'>
                    <h2>Ground Floor</h2>
                    <ul className='room-list'>
                        {roomStatus.map((each, index) => (
                            (index < 10) ?
                                <li className='room-item' key={each.id}>
                                    <div className='room-number'>{each.roomNo}</div>
                                    <div onClick={() => (
                                        each.personCount === 2 ? null : each.personCount === 1 ? history(`/roomStatus/random/${each.id}&${each.roomNo}`) : history(`/roomStatus/query/${each.id}&${each.roomNo}`)
                                    )}
                                        style={{ backgroundColor: each.personCount === 2 ? "red" : each.personCount === 1 ? "yellow" : "green" }} className='room-status'></div>
                                </li>
                                : null
                        ))}
                    </ul>
                </div>

                <div className='column2'>
                    <h2>First Floor</h2>
                    <ul className='room-list'>
                        {roomStatus.map((each, index) => (
                            (index > 9 && index < 20) ?
                                <li className='room-item' key={each.id}>
                                    <div className='room-number'>{each.roomNo}</div>
                                    <div onClick={() => (
                                        each.personCount === 2 ? null : each.personCount === 1 ? history(`/roomStatus/random/${each.id}&${each.roomNo}`) : history(`/roomStatus/query/${each.id}&${each.roomNo}`)
                                    )}
                                        style={{ backgroundColor: each.personCount === 2 ? "red" : each.personCount === 1 ? "yellow" : "green" }} className='room-status'></div>
                                </li>
                                : null
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}

export default RoomStatus;
