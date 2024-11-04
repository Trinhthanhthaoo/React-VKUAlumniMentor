import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login_Register from './Pages/Login_Register';
import Competition from './components/Competition';
import Document from './Pages/Document';
import Homepage from './Pages/Homepage';
import AdminTaiLieu from './Pages/AdminTaiLieu'
import AdminCuocThi from './Pages/AdminCuocThi'
import AdminDanhGia from './Pages/AdminDanhGia'
import AdminHopTac from './Pages/AdminHopTac'
import AdminMentor from './Pages/AdminMentor'
import RegisterMentor from './Pages/RegisterMentor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <Routes>
      <Route path="/Login_Register" element={<Login_Register />} />
      <Route path="/Competition" element={<Competition />} />
      <Route path="/Document" element={<Document />} />
      <Route path="/" element={<Homepage />} />

      <Route path='/AdminTaiLieu' element={<AdminTaiLieu />} />
      <Route path='/AdminDanhGia' element={<AdminDanhGia />} />
      <Route path='/AdminHopTac' element={<AdminHopTac />} />
      <Route path='/AdminMentor' element={<AdminMentor />} />
      <Route path='/AdminCuocThi' element={<AdminCuocThi />} />

      <Route path='/RegisterMentor' element={<RegisterMentor />} />
    </Routes>
  );
}

export default App;
