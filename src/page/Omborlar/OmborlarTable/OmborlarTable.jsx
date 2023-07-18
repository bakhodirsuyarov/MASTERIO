import React from 'react'
import './OmborlarTable.css'
import { useNavigate } from 'react-router-dom';
import buyurtmaMagazinData from '../../BuyurtmaMagzin/BuyurtmaMagazinData';

function OmborlarTable() {
    const navigate = useNavigate()
    const whenselected = () => {
        navigate("/Whenselected")
    }
    return (
        <div>
            <div className="OmborlarTable">
                <table className="BuurtmaMagazinTable">
                    <thead>
                        <tr className='Tr'>
                            <th className="tushumlarTh">Maxsulot nomi</th>
                            <th className="tushumlarTh">Maxsulot rangi</th>
                            <th className="tushumlarTh">Maxsulot o`lchami</th>
                            <th className="tushumlarTh">Maxsulot soni</th>
                            <th className="tushumlarTh">Buyurtma holati</th>
                        </tr>
                    </thead>

                    <tbody>
                        {buyurtmaMagazinData.map((element, value) => {
                            return (
                                <tr onClick={whenselected}>
                                    <td> {element.maxsulot_nomi} </td>
                                    <td> {element.maxsulot_rangi} </td>
                                    <td> {element.maxsulot_olchami} </td>
                                    <td> {element.maxsulot_soni} </td>
                                    <td> {element.holati} </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default OmborlarTable