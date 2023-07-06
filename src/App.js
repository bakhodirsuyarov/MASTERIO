import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Navbar from './component/navbar/Navbar';
import DokonlarLogin from './page/Dokonlar/DokonlarLogin/DokonlarLogin';
import Dokonlar from './page/Dokonlar/Dokonlar';
import BuyurtmalarDirektor from './page/Buyurtmalar_direktor/BuyurtmalarDirektor';
import Xodimlar from './page/Xodimlar/Xodimlar';
import Enteringthestore from './page/Dokonlar/Enteringthestore/Enteringthestore';
import Omborlar from './page/Omborlar/Omborlar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path='/dokonlarlogin' element={<DokonlarLogin />} />
        <Route path='/dokonlar' element={<Dokonlar />} />
        <Route path='/buyurtmalar' element={<BuyurtmalarDirektor />} />
        <Route path='/xodimlar' element={<Xodimlar />} />
        <Route path='/enteringthestore' element={<Enteringthestore />} />
        <Route path='/omborlar' element={<Omborlar />} />
      </Routes>
    </div>
  );
}

export default App;