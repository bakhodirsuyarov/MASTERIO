import React from "react";
import "./Kliyentlar.css";
import kliyentData from "./KliyentlarData.js";

function Kliyentlar() {
  return (
    <div className="kliyentCard">
      <div className="kliyentBox">
        {kliyentData.map((element, value) => {
          return (
            <div className="kliyentTitle">
              <img src={element.img} alt="" />
              <h3 className="kliyentIsm">{element.ism}</h3>
              <h4 className="kliyentPhone">{element.phone}</h4>
              <div className="kliyentXrd">
                <h5>{element.xarid_oraligi}</h5> <span>|</span> 
                <h5>{element.oxirgi_xarid}</h5>
              </div>
              <button className="kliyentEdit" type="button">Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Kliyentlar;
