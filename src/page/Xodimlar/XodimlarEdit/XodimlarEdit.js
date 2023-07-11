import React, { useState } from 'react'
import { employeeData } from '../XodimlarData'

export default function XodimlarEdit({OpenEdit}) {

  const editFunc = () =>{
    employeeData.map((item, index) =>{
      inpname = item.title
      inptel = item.tel
      inppass = item.Passport
    })

    console.log(employeeData.index);
  }

  

  const [inpname, setInpname] = useState('')
  const [inptel, setInptel] = useState('')
  const [inppass, setInppass] = useState('')

  return (
    <div className='XodimlarModalWrapper'>
      <div className="XodimlarModal">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            OpenEdit(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="CreateShop">
                    <input onChange={(e)=> setInpname(e.target.value)} className="CreateShopinput" type="text" placeholder="Name" />
                    <input onChange={(e)=> setInptel(e.target.value)} className="CreateShopinput" type="text" placeholder="Telephone" />
                    <input onChange={(e)=> setInppass(e.target.value)} className="CreateShopinput" type="text" placeholder="Passport" />
                </div>
                <div className="footer">
                    <button onClick={editFunc} className="Createbtn">
                        Edit Save
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
