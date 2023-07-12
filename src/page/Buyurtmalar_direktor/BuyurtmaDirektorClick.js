import React from 'react';
import fakeData from './BuyurtmalarDirektorData.js';
import './BuyutmalarDirektor.css'

function BuyurtmaDirektorClick() {
  return (
    <div>
        <div className="buyurtmaAbout">
            {fakeData.map((element , value) => {
                return (
                  <div className='mahsulotCard'>

                    <div className='mahsulotAbout'>
                    <h4>Shartnoma raqami: <span className='mahsulotSpan'> {element.shartnoma_raqami}</span></h4>
                    <h4>Davlat: <span className="nahsulotSpan">{element.davlat_nomi}</span></h4>
                    <h4>Zavod nomi: <span className="mahsulotSpan"> {element.zavod_nomi} </span></h4>
                    <h4>Tuzilgan sanasi: <span className="mahsulotSpan"> {element.sanasi} </span></h4>
                    <h4>Holati: <span className="mahsulotSpan"> {element.holati} </span></h4>
                    </div>

                    <div className="mahsulotTable">

                    </div>
                  </div>
                    
                )
            })}
        </div>
    </div>
  )
}

export default BuyurtmaDirektorClick