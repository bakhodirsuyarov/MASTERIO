import React from 'react'

function OmborlarModal({ setOpenModal }) {
    return (
        <div className='OmborlarModal'>
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
                    <input className="CreateShopinput" type="text" placeholder="Magazin nomi" />
                    <input className="CreateShopinput" type="text" placeholder="Magazin manzili" />
                    <input className="CreateShopinput" type="email" placeholder="Login" />
                    <input className="CreateShopinput" type="password" placeholder="Password" />
                </div>
                <div className="footer">
                    <button
                        className="Createbtn"
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OmborlarModal