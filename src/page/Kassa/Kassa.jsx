import React from 'react'
import './Kassa.css'
import ucer from '../../assets/images/Form.png'

function Kassa() {
  return (
    <div className='Kassa'>
      <img className='ucer_img' src={ucer} alt="" />
      <div className="Kassa_card">
        <div className="Kassa_cards">
          <h1 className='Kassa_cards_h1'>USD</h1>
          <h2 className='Kassa_cards_h2'>300$</h2>
          <input className='Kassa_cards_input' type="radio" name="" id="" />
        </div>
        <div className="Kassa_cards">
          <h1 className='Kassa_cards_h1'>UZS</h1>
          <h2 className='Kassa_cards_h2'>560$</h2>
          <input className='Kassa_cards_input' type="radio" name="" id="" />
        </div>
        <div className="Kassa_cards">
          <h1 className='Kassa_cards_h1'>YUAN</h1>
          <h2 className='Kassa_cards_h2'>700$</h2>
          <input className='Kassa_cards_input' type="radio" name="" id="" />
        </div>
      </div>
    </div>
  )
}

export default Kassa