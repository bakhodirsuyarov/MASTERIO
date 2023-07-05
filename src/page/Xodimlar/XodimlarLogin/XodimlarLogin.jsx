import React, { useState } from 'react'
import "./XodimlarLogin.css"
import Logo from '../../../assets/images/Logo.png'
import { useNavigate } from 'react-router-dom'
import { employeeData } from '../XodimlarData'

export default function XodimlarLogin() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [userTel, setUserTel] = useState('')
    const [userPass, setUserPass] = useState('')

    const btnonClick = () =>{
      employeeData.map((item, value) =>{
        if(item.title === userName && item.tel == userTel && item.Passport == userPass){
          navigate('/xodimlar')
        }
      })
    }
  return (
    <div className='Dokonlar'>
    <form action="" className='Login_form'>
        <div className='Login_form_logo'>
            <img className='Login_form_img' src={Logo} alt="" />
            <h2 className='Login_form_h2'>Materio</h2>
        </div>
        <input onChange={(e) => setUserName(e.target.value)} className='Login_form_input' type="name" placeholder='Name' required/>
        <input onChange={(e) => setUserTel(e.target.value)} className='Login_form_input' type="text" placeholder='Phone' required/>
        <input onChange={(e) => setUserPass(e.target.value)} className='Login_form_input' type="text" placeholder='Pasport' required/>
        <button onClick={btnonClick} className='Login_form_button'>LOGIN</button>
    </form>


    </div>
  )
}
