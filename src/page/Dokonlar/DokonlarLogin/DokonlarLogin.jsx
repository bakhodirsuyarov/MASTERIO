import React, { useState } from 'react'
import './DokonlarLogin.css'
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png'
import { employeData } from './DokonlarLoginData';

function DokonlarLogin() {
    const navigate = useNavigate();
    const [UserName, setUserName] = useState('')
    const [UserPhone, setUserPhone] = useState('')
    const [UserPasport, setUserPasport] = useState('')

    const btnonClick = () => {
        employeData.map((item, value) => {
            if (item.title === UserName && item.tel == UserPhone && item.Passport == UserPasport) {
                navigate('/dokonlar')
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
                <input onChange={(e) => setUserName(e.target.value)} className='Login_form_input' type="name" placeholder='Name' required />
                <input onChange={(e) => setUserPhone(e.target.value)} className='Login_form_input' type="number" placeholder='Phone' required />
                <input onChange={(e) => setUserPasport(e.target.value)} className='Login_form_input' type="title" placeholder='Pasport' required />
                <button onClick={btnonClick} className='Login_form_button'>LOGIN</button>
            </form>
        </div>
    )
}

export default DokonlarLogin