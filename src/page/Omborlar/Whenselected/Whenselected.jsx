import React from 'react'
import './Whenselected.css'
import buyurtmaMagazinData from '../../BuyurtmaMagzin/BuyurtmaMagazinData';
import MahsulotlarRoyhati from '../MahsulotlarRoyhati/MahsulotlarRoyhati';
import OmborgaBuyurtma from '../OmborgaBuyurtma/OmborgaBuyurtma';

function Whenselected() {
    return (
        <div className='Whenselected'>
            <table className="BuurtmaMagazinTable">
                <thead>
                    <tr className='Tr'>
                        <th className="tushumlarTh">Maxsulot nomi</th>
                        <th className="tushumlarTh">Razmeri</th>
                        <th className="tushumlarTh">Rangi</th>
                        <th className="tushumlarTh">Joylashgan joylari</th>
                        <th className="tushumlarTh">Soni</th>
                        <th className="tushumlarTh">Sotish narxi</th>
                        <th className="tushumlarTh">Kirib kelgan narxi</th>
                    </tr>
                </thead>

                <tbody>
                    {buyurtmaMagazinData.map((element, value) => {
                        return (
                            <tr>
                                <td> {element.maxsulot_nomi} </td>
                                <td> {element.maxsulot_rangi} </td>
                                <td> {element.maxsulot_olchami} </td>
                                <td> {element.maxsulot_soni} </td>
                                <td> {element.holati} </td>
                                <td> {element.maxsulot_olchami} </td>
                                <td> {element.holati} </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <MahsulotlarRoyhati />
            <OmborgaBuyurtma />
        </div>
    )
}

export default Whenselected