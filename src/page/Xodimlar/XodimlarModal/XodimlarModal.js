import React, { useEffect, useState } from 'react'
import "./XodimlarModal.css"
import { employeeData } from '../XodimlarData'
import rasm1 from "../../../assets/img/Avatar (1).png"

export default function XodimlarModal({ setOpenModal }) {

  const [inp1, setInp1] = useState('')
  const [tel, setTel] = useState('')
  const [pass, setPass] = useState('')

  console.log(employeeData);

  const create = () => {
    employeeData.push(
      {
        title: inp1,
        tel: tel,
        Passport: pass,
        image: rasm1
      }
    )
    console.log(employeeData);
  }

  employeeData.map((element, value) => {
    return <div className='cart-inner'>
      <img src={element.image} alt="" />
      <h3>{element.title}</h3>
      <h4>{element.tel}</h4>
      <h4>{element.Passport}</h4>
      <button className='employee-btn'>Edit</button>
    </div>
  })


  return (
    <div className='XodimlarModalWrapper'>
      <div className="XodimlarModal">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="CreateShop">
            <input onChange={(e) => setInp1(e.target.value)} className="CreateShopinput" type="text" placeholder="Name" />
            <input onChange={(e) => setTel(e.target.value)} className="CreateShopinput" type="text" placeholder="Telephone" />
            <input onChange={(e) => setPass(e.target.value)} className="CreateShopinput" type="text" placeholder="Passport" />
          </div>
          <div className="footer">
            <button className="Createbtn" onClick={create}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
