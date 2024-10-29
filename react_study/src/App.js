import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login_Register from './components/Login_Register';
import Competition from './components/Competition';
import Document from './components/Document';
import Homepage from './components/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/Login_Register" element={<Login_Register />} />
      <Route path="/Competition" element={<Competition />} />
      <Route path="/Document" element={<Document />} />
      <Route path="/Homepage" element={<Homepage />} />
    </Routes>
  );
}

export default App;
