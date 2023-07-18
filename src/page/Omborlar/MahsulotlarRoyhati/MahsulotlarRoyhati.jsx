import React from 'react'
import buyurtmaMagazinData from '../../BuyurtmaMagzin/BuyurtmaMagazinData';
import { useNavigate } from 'react-router-dom';

function MahsulotlarRoyhati() {
    const navigate = useNavigate()
    const whenpressed = () => {
        navigate("/Whenpressed")
    }
    return (
        <div className='MahsulotlarRoyhati'>
            <table className="BuurtmaMagazinTable">
                <thead>
                    <tr className='Tr'>
                        <th className="tushumlarTh">Sahrtnoma</th>
                        <th className="tushumlarTh">Raqami</th>
                        <th className="tushumlarTh">Sanasi</th>
                    </tr>
                </thead>

                <tbody>
                    {buyurtmaMagazinData.map((element, value) => {
                        return (
                            <tr onClick={whenpressed}>
                                <td> {element.maxsulot_nomi} </td>
                                <td> {element.maxsulot_rangi} </td>
                                <td> {element.maxsulot_olchami} </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default MahsulotlarRoyhati