import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboard content="Dashboard" title="dashboard"/>}/>
          <Route path="settings" element={<Dashboard content="Settings" title="settings"/>}/>
          <Route path="notifications" element={<Dashboard content="notifications" title="notifications"/>}/>
          <Route path="movements" element={<Dashboard content="movements" title="movements"/>}/>
          <Route path="wallet" element={<Dashboard content="wallet" title="wallet"/>}/>
          <Route path="/" element={<Navigate to="dashboard"/>} />
          <Route path="*" element={<Dashboard content="NOTHING HERE" title="not found"/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
