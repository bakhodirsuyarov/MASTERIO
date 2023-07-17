import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Navbar from './component/navbar/Navbar';
import DokonlarLogin from './page/Dokonlar/DokonlarLogin/DokonlarLogin';
import Dokonlar from './page/Dokonlar/Dokonlar';
import BuyurtmalarDirektor from './page/Buyurtmalar_direktor/BuyurtmalarDirektor';
import Xodimlar from './page/Xodimlar/Xodimlar';
import XodimlarLogin from './page/Xodimlar/XodimlarLogin/XodimlarLogin';
import Enteringthestore from './page/Dokonlar/Enteringthestore/Enteringthestore';
import Omborlar from './page/Omborlar/Omborlar';
import Kliyentlar from './page/Kliyentlar/Kliyentlar';
import BuyurtmaDirektorClick from './page/Buyurtmalar_direktor/BuyurtmaDirektorClick';
import Whenselected from './page/Omborlar/Whenselected/Whenselected';
import Tushumlar from './page/Tushumlar/Tushumlar';
import KliyentMagzain from './page/KliyentMagazin/KliyentMagzain';
import BuyurtmaMagazin from './page/BuyurtmaMagzin/BuyurtmaMagazin';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path='/dokonlarlogin' element={<DokonlarLogin />} />
        <Route path='/dokonlar' element={<Dokonlar />} />
        <Route path='/buyurtmalar' element={<BuyurtmalarDirektor />} />
        <Route path='/xodimlarlogin' element={<XodimlarLogin />} />
        <Route path='/xodimlar' element={<Xodimlar />} />
        <Route path='/enteringthestore' element={<Enteringthestore />} />
        <Route path='/omborlar' element={<Omborlar />} />
        <Route path='/kliyent' element={<Kliyentlar/>}/>
        <Route path='/buyurtmalar-paneli' element={<BuyurtmaDirektorClick/>}/>
        <Route path='/whenselected' element={<Whenselected/>}/>
        <Route path='/tushumlar' element = { <Tushumlar/>} />
        <Route path='/kliyent_baza' element= { <KliyentMagzain/>}/>
        <Route path='/omborgabuyurtmalar' element= { <BuyurtmaMagazin/> }/>
      </Routes>
    </div>
  );
}

export default App;
