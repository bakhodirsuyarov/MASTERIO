import React from 'react'
import buyurtmaMagazinData from '../../BuyurtmaMagzin/BuyurtmaMagazinData';

function TushganBuyurtmalar() {
    return (
        <div className='TushganBuyurtmalar'>
            <table className="BuurtmaMagazinTable">
                <thead>
                    <tr className='Tr'>
                        <th className="tushumlarTh">Ombor yoki Do’kon</th>
                        <th className="tushumlarTh">Sanasi</th>
                        <th className="tushumlarTh">Maxsulotlar soni</th>
                        <th className="tushumlarTh">Buyurtma raqami</th>
                        <th className="tushumlarTh">Holati</th>
                    </tr>
                </thead>

                <tbody>
                    {buyurtmaMagazinData.map((element, value) => {
                        return (
                            <tr onClick={whenpressed}>
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
        </div >
    )
}

export default TushganBuyurtmalar