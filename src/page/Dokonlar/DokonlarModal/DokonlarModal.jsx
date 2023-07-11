import React, { useState } from "react";
import "./DokonlarModal.css";
import { DokonlarModalData } from "./DokonlarModalData";

function DokonlarModal({ setOpenModal }) {
    const [nomi, setNomi] = useState('')
    const [manzili, setManzili] = useState('')
    const [soni, setSoni] = useState('')
    const [Savdosi, setSavdosi] = useState('')
    const [Valyutasi, setValyutasi] = useState('')
    const [Xsoni, setXsoni] = useState('')

    console.log(DokonlarModalData);

    const create = () => {
        DokonlarModalData.push(
            {
                dokon_nomi: nomi,
                manzili: manzili,
                mahsulot_soni: soni,
                savdosi: Savdosi,
                valyutasi: Valyutasi,
                xodimlar_soni: Xsoni,
            }
        )
        console.log(DokonlarModalData);
    }

    DokonlarModalData.map((element, value) => {
        return <div className='cart-inner'>
            <h3>{element.dokon_nomi}</h3>
            <h4>{element.manzili}</h4>
            <h4>{element.mahsulot_soni}</h4>
            <h4>{element.savdosi}</h4>
            <h4>{element.valyutasi}</h4>
            <h4>{element.xodimlar_soni}</h4>
        </div>
    })
    return (
        <div className="DokonlarModal">
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
                    <input onChange={(e) => setNomi(e.target.value)} className="CreateShopinput" type="text" placeholder="Magazin nomi" />
                    <input onChange={(e) => setManzili(e.target.value)} className="CreateShopinput" type="text" placeholder="Magazin manzili" />
                    <input onChange={(e) => setSoni(e.target.value)} className="CreateShopinput" type="number" placeholder="Mahsulot soni" />
                    <input onChange={(e) => setSavdosi(e.target.value)} className="CreateShopinput" type="text" placeholder="Savdosi" />
                    <input onChange={(e) => setValyutasi(e.target.value)} className="CreateShopinput" type="text" placeholder="Valyutasi" />
                    <input onChange={(e) => setXsoni(e.target.value)} className="CreateShopinput" type="number" placeholder="Xodimlar soni" />
                </div>
                <div className="footer">
                    <button className="Createbtn" onClick={create}>
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DokonlarModal;