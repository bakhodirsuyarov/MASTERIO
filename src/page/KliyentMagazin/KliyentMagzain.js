import React from 'react';
import './KliyentMagazin.css';
import kliyentMagazinData from './KliyentMagazinData.js';

function KliyentMagzain() {
  return (
    <div>
         <div className="kliyentCard">
      <div className="kliyentBox">
        {kliyentMagazinData.map((element, value) => {
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
    </div>
  )
}

export default KliyentMagzain;