import React from 'react'
import buyurtmaMagazinData from '../../../BuyurtmaMagzin/BuyurtmaMagazinData';

function ClickedProducts() {
    return (
        <div className='ClickedProducts'>
            <table className="ClikedProductsTable">
                <thead>
                    <tr>
                        <th className="tushumlarTh">Maxsulot nomi</th>
                        <th className="tushumlarTh">Razmeri</th>
                        <th className="tushumlarTh">Rangi</th>
                        <th className="tushumlarTh">Sanasi</th>
                        <th className="tushumlarTh">Soni</th>
                        <th className="tushumlarTh">Tushgan soni</th>
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
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default ClickedProducts