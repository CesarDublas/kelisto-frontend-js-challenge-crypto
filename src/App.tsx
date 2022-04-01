import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";

import './App.scss';
import { useAppDispatch } from './app/hooks';
import { calculateTotals, getList } from './components/PageContent/components/CryptoList/cryptoSlice';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getList());
    dispatch(calculateTotals());
  });

  return (
    <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboard content="Recent" title="recent"/>}/>
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
