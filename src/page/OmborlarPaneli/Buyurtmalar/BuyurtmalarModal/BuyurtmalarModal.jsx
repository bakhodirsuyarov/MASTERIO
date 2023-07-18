import React, { useState } from 'react'
import { DokonlarModalData } from '../../../Dokonlar/DokonlarModal/DokonlarModalData'
import './BuyurtmalarModal.css'

function BuyurtmalarModal({ setOpenModal }) {
    const [nomi, setNomi] = useState('')
    const [manzili, setManzili] = useState('')
    const [olchami, setOlchami] = useState('')
    const [soni, setSoni] = useState('')
    const [holati, setHolati] = useState('')
    const [sanasi, setSanasi] = useState('')

    console.log(DokonlarModalData);

    const create = () => {
        DokonlarModalData.push(
            {
                Nomi: nomi,
                Manzili: manzili,
                Olchami: olchami,
                Soni: soni,
                Holati: holati,
                Sanasi: sanasi,
            }
        )
        console.log(DokonlarModalData);
    }
    return (
        <div className='BuyurtmalarModal'>
            <div className="modalContainerBuyurtmalar">
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
                    <input onChange={(e) => setNomi(e.target.value)} className="CreateShopinput" type="text" placeholder="Maxsulot nomi" />
                    <input onChange={(e) => setManzili(e.target.value)} className="CreateShopinput" type="text" placeholder="Magazin manzili" />
                    <input onChange={(e) => setOlchami(e.target.value)} className="CreateShopinput" type="number" placeholder="Maxsulot o’lchami" />
                    <input onChange={(e) => setSoni(e.target.value)} className="CreateShopinput" type="text" placeholder="Maxsulot soni" />
                    <input onChange={(e) => setHolati(e.target.value)} className="CreateShopinput" type="text" placeholder="Holati" />
                    <input onChange={(e) => setSanasi(e.target.value)} className="CreateShopinput" type="date" placeholder="Sanasi" />
                </div>
                <div className="footer">
                    <button className="CreatebtnBuyurtmalarModal" onClick={create}>
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BuyurtmalarModal