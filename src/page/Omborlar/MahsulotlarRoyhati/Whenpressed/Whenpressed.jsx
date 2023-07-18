import React from 'react'
import buyurtmaMagazinData from '../../../BuyurtmaMagzin/BuyurtmaMagazinData';

function Whenpressed() {
    return (
        <div>
            <table className="BuurtmaMagazinTable">
                <thead>
                    <tr className='Tr'>
                        <th className="tushumlarTh">Shartnoma</th>
                        <th className="tushumlarTh"> nomi</th>
                        <th className="tushumlarTh"> o’lchami</th>
                        <th className="tushumlarTh"> rangi</th>
                        <th className="tushumlarTh"> kirib kelish narxi </th>
                        <th className="tushumlarTh">Valyutasi</th>
                        <th className="tushumlarTh"> soni</th>
                        <th className="tushumlarTh">Joylashgan joylari</th>
                        <th className="tushumlarTh"> narxi</th>
                        <th className="tushumlarTh">Sanasi</th>
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
                                <td> {element.maxsulot_olchami} </td>
                                <td> {element.maxsulot_rangi} </td>
                                <td> {element.holati} </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Whenpressed