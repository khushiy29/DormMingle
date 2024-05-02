import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookMainUsingRS from './components/Book Room Using Room Status/BookMainUsingRS';
import BookRoomForRandomUsingRS from './components/Book Room Using Room Status/BookRoomForRandomUsingRS';
import BookRoomWithFriendUsingRS from './components/Book Room Using Room Status/BookRoomWithFriendUsingRS';
import BookMain from './components/Book Room/BookMain';
import BookRoomForRandom from './components/Book Room/BookRoomForRandom';
import BookRoom from './components/Book Room/BookRoomForRandom';
import BookRoomWithFriend from './components/Book Room/BookRoomWithFriend';
import CertificateOfRoom from './components/Certificate of Room/CertificateOfRoomOne';
import CertificateOfRoomOne from './components/Certificate of Room/CertificateOfRoomOne';
import CertificateOfRoomTwo from './components/Certificate of Room/CertificateOfRoomTwo';
import Navbar from './components/Headers/Navbar';
import Home from './components/Home Page/Home';
import RoomStatus from './components/Room Status/RoomStatus';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/roomstatus" element={<RoomStatus/>} />
          <Route path="/bookroom" element={<BookMain/>}/>
          <Route path='/bookroomforrandom' element={<BookRoomForRandom/>}/>
          <Route path='/bookroomwithfriend' element={<BookRoomWithFriend/>}/>
          <Route path='/certificateOne/:idOfPerson1' element={<CertificateOfRoomOne/>}/>
          <Route path='/certificateTwo/:idOfPerson2' element={<CertificateOfRoomTwo/>}/>

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          <Route path='/roomStatus/random/:idOfRoomAndRoomNo' element={<BookRoomForRandomUsingRS/>}/>
          <Route path='/roomStatus/query/:idOfRoomAndRoomNo' element={<BookMainUsingRS/>}/>
          <Route path='/roomStatus/friend/:idOfRoomAndRoomNo' element={<BookRoomWithFriendUsingRS/>}/>
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </main>
    </React.Fragment>
  );
}

export default App;
