import React from 'react'
import './DokonlarLogin.css'
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png'

function DokonlarLogin() {
    const navigate = useNavigate();
    const btnonClick = () => {
        navigate('/dokonlar')
    }
    return (
        <div className='Dokonlar'>
            <form action="" className='Login_form'>
                <div className='Login_form_logo'>
                    <img className='Login_form_img' src={Logo} alt="" />
                    <h2 className='Login_form_h2'>Materio</h2>
                </div>
                <input className='Login_form_input' type="name" placeholder='Name' />
                <input className='Login_form_input' type="number" placeholder='Phone' />
                <input className='Login_form_input' type="number" placeholder='Pasport' />
                <button onClick={btnonClick} className='Login_form_button'>LOGIN</button>
            </form>
        </div>
    )
}

export default DokonlarLogin