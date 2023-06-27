import React, { useState } from "react";
import { SidebarData, direktorData, magazinData, omborData } from "./SidebarData";
import { Link } from "react-router-dom";
import './Sidebar.css'
import logo from '../../assets/img/Logo.svg'
// import { Context } from '../../context/ContextProvider'

const Sidebar = () => {
  const [active,  setActive] = useState();

  return (
    <>
      <div className="sidebar">

      <div className="logo">
         <img src={logo} alt="" /> 
         <h2 className="logoTitle">MATERIO</h2>
         <input type="radio" name="" id="" />
      </div>
        <h4 className="menuTop1">Direktor panel</h4>
        {direktorData.map((element, value) => {
          return (
            <li key={value} onClick={() => setActive(element.title)} className={active == element.title ? 'activeMenu' : ""}>
                <Link to={element.path}><span>{element.icon}</span>{element.title}</Link>
            </li>
          );
        })}

        <h4 className="menuTop2">Magazin panel</h4>
        {magazinData.map((element, value) => {
          return (
            <li key={value} onClick={() => setActive(element.mTitle)} className={active == element.mTitle ? 'activeMenu' : ""}>
              <Link to={element.path}><span>{element.micon}</span> {element.mTitle}</Link>
            </li>
          );
        })}

        <h4 className="menuTop3">Ombor panel</h4>
        {omborData.map((element, value) => {
          return (
            <li key={value}  onClick={() => setActive(element.oTitle)} className={active == element.oTitle ? 'activeMenu' : ""}>
              <Link><span>{element.oicon}</span> {element.oTitle}</Link>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
