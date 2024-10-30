import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login_Register from './components/Login_Register';
import Competition from './components/Competition';
import Document from './components/Document';
import Homepage from './components/Homepage';
import AdminTaiLieu from './components/AdminTaiLieu'
import AdminCuocThi from './components/AdminCuocThi'
import AdminDanhGia from './components/AdminDanhGia'
import AdminHopTac from './components/AdminHopTac'
import AdminMentor from './components/AdminMentor'
function App() {
  return (
    <Routes>
      <Route path="/Login_Register" element={<Login_Register />} />
      <Route path="/Competition" element={<Competition />} />
      <Route path="/Document" element={<Document />} />
      <Route path="/Homepage" element={<Homepage />} />
        <Route path='/AdminTaiLieu' element={<AdminTaiLieu />} />
        <Route path='/AdminDanhGia' element={<AdminDanhGia />} />
        <Route path='/AdminHopTac' element={<AdminHopTac />} />
        <Route path='/AdminMentor' element={<AdminMentor />} />
        <Route path='/AdminCuocThi' element={<AdminCuocThi />} />

    </Routes>
  );
}

export default App;
