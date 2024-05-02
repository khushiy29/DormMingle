import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BookRoomWithFriendUsingRS = () => {
    const history = useNavigate();
    const [person, setPersons] = useState({});
    const [checker, setChecker] = useState(false);
    const [msg, setMsg] = useState("");

    const paramsData = useParams().idOfRoomAndRoomNo;
    const id = paramsData.split("&")[0];
    const roomNo = paramsData.split("&")[1];

    const handleChange = (e) => {
        setPersons((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const sendRequest = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/v2/allocateTwo", ([
                {
                    name: String(person.fullName1),
                    rollNo: String(person.rollNo1),
                    transactionId: String(person.transId1),
                    emailId: String(person.emailId1),
                    phoneNumber: String(person.phoneNumber1),
                    address: String(person.address1),
                    id: String(id)
                },
                {
                    name: String(person.fullName2),
                    rollNo: String(person.rollNo2),
                    transactionId: String(person.transId2),
                    emailId: String(person.emailId2),
                    phoneNumber: String(person.phoneNumber2),
                    address: String(person.address2),
                    id: String(id)
                }
            ]));
            return res.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formIsValid = true;

        // Check if any field is empty
        for (const key in person) {
            if (!person[key]) {
                formIsValid = false;
                break;
            }
        }

        if (formIsValid) {
            sendRequest()
                .then((res) => {
                    if (res.status === 200) {
                        const data = res.data;
                        const id = data.data[0] + "&" + data.data[1];
                        history(`/certificateTwo/${id}`);
                    } else {
                        setChecker(true);
                        setMsg(res.data.msg);
                    }
                })
                .catch((error) => {
                    setChecker(true);
                    setMsg(error.message);
                });
        } else {
            setChecker(true);
            setMsg('Please fill out all fields');
            // Display popup
            alert('Please fill out all fields');
        }
    }

    return (
        <>
            <h1 className='composeTitle'>Book Room with Friend</h1>
            <form onSubmit={handleSubmit}>
                <div className='composeInput'>
                    <h1>Person 1</h1>
                    <p>Full Name</p>
                    <input type='text' onChange={handleChange} name='fullName1' placeholder='Harsh Mukeshbhai Patel'></input>
                    <p>Roll No</p>
                    <input type='text' onChange={handleChange} name='rollNo1' placeholder='21BCP001'></input>
                    <p>College Email-Id</p>
                    <input type='text' onChange={handleChange} name='emailId1' placeholder='harsh.bce21@sot.pdpu.ac.in'></input>
                    <p>Transaction Id</p>
                    <input type='text' onChange={handleChange} name='transId1' placeholder='T10312873291'></input>
                    <p>Room No</p>
                    <input type='text' value={roomNo} name='roomNo' disabled></input>
                    <p>Address</p>
                    <input type='text' onChange={handleChange} name='address1' placeholder='C-110 Rudra Apartment'></input>
                    <p>Phone No</p>
                    <input type='text' onChange={handleChange} name='phoneNumber1' placeholder='999888999'></input><br />
                </div>
                <div className='composeInput'>
                    <h1>Person 2</h1>
                    <p>Full Name</p>
                    <input type='text' onChange={handleChange} name='fullName2' placeholder='Harsh Mukeshbhai Patel'></input>
                    <p>Roll No</p>
                    <input type='text' onChange={handleChange} name='rollNo2' placeholder='21BCP001'></input>
                    <p>College Email-Id</p>
                    <input type='text' onChange={handleChange} name='emailId2' placeholder='harsh.bce21@sot.pdpu.ac.in'></input>
                    <p>Transaction Id</p>
                    <input type='text' onChange={handleChange} name='transId2' placeholder='T10312873291'></input>
                    <p>Room No</p>
                    <input type='text' value={roomNo} name='roomNo' disabled></input>
                    <p>Address</p>
                    <input type='text' onChange={handleChange} name='address2' placeholder='C-110 Rudra Apartment'></input>
                    <p>Phone No</p>
                    <input type='text' onChange={handleChange} name='phoneNumber2' placeholder='999888999'></input><br />
                    {checker &&
                        <p className='error'>{msg}</p>
                    }
                </div>
                <button className='composebtn'>Book Room</button>
            </form>
        </>
    )
}

export default BookRoomWithFriendUsingRS;
