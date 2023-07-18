import React from 'react'
import buyurtmaMagazinData from '../../BuyurtmaMagzin/BuyurtmaMagazinData';
import { useNavigate } from 'react-router-dom';

function OmborgaBuyurtma() {
    const navigate=useNavigate()
    const clickedProducts =()=>{
        navigate('/clickedProducts')
    }
    return (
        <div>
            <table className="BuurtmaMagazinTable">
                <thead>
                    <tr className='Tr'>
                        <th className="tushumlarTh">Ombor</th>
                        <th className="tushumlarTh">Buyurtma ramaqi</th>
                        <th className="tushumlarTh">Buyurtma holati </th>
                    </tr>
                </thead>

                <tbody>
                    {buyurtmaMagazinData.map((element, value) => {
                        return (
                            <tr onClick={clickedProducts}>
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

export default OmborgaBuyurtma