import React, { useState } from 'react'
import { employeeData } from './XodimlarData'
import "./Xodimlar.css"

export default function Xodimlar() {

  const [btn, setBtn] = useState(false)

  return (
    <div className='employee'>

      <button onClick={() => setBtn(!btn)} className='employee-btn'>Add employee</button>
      <div className="employee-cart">
        {
          employeeData.map((element, value) =>{
            return <div className='cart-inner'>
              <img src={element.image} alt="" />
              <h3>{element.title}</h3>
              <h4>{element.tel}</h4>
              <h4>{element.Passport}</h4>
              <button className='employee-btn'>Edit</button>
            </div>
          })
        }
      </div>


    </div>


  )
}
