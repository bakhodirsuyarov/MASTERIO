import React, { useState } from "react";
import "./Sotuv.css";
import SotuvTableData from "./SotuvTableData/SotuvTableData";

function Sotuv() {
    const [maxsulotNomi, setMaxsulotNomi] = useState("");
    const [maxsulotRangi, setMaxsulotRangi] = useState("");
    const [maxsulotOlchami, setMaxsulotOlchami] = useState("");
    const [maxsulotSoni, setMaxsulotSoni] = useState("");
    console.log(setMaxsulotNomi);
    console.log(setMaxsulotRangi);
    console.log(setMaxsulotOlchami);
    console.log(setMaxsulotSoni);

    return (
        <>
            <div className="BuyurtmaMagazinCard">
                <div className="BuyurtmaMagazinBox">
                    <h1 className="BuyurtmaMagazinBox_h1">
                        savdo qilish 
                    </h1>
                    <form className="BuyurtmaMagazinForm" action="">
                        <input
                            required
                            onChange={(e) => setMaxsulotNomi(e.target.value)}
                            className="BuyurtmaMagazinInput"
                            type="text"
                            placeholder="Maxsulot nomi"
                        />
                        <input
                            required
                            onChange={(e) => setMaxsulotRangi(e.target.value)}
                            className="BuyurtmaMagazinInput"
                            type="text"
                            placeholder="Maxsulot rangi"
                        />
                        <input
                            required
                            onChange={(e) => setMaxsulotOlchami(e.target.value)}
                            className="BuyurtmaMagazinInput"
                            type="text"
                            placeholder="Maxsulot o`lchami"
                        />
                        <input
                            required
                            onChange={(e) => setMaxsulotSoni(e.target.value)}
                            className="BuyurtmaMagazinInput"
                            type="number"
                            placeholder="Maxsulot soni"
                        />
                        <input
                            required
                            onChange={(e) => setMaxsulotSoni(e.target.value)}
                            className="BuyurtmaMagazinInput"
                            type="number"
                            placeholder="sotish narhi"
                        />
                        <input
                            required
                            onChange={(e) => setMaxsulotSoni(e.target.value)}
                            className="BuyurtmaMagazinInput"
                            type="number"
                            placeholder="valutasi"
                        />
                        <button className="BuyurtmaMagazinButton">Tasdiqlash</button>
                    </form>
                </div>
            </div>

            <h1 className="BuyurtmaMagazinTable_h1">Savdolar royhati</h1>
            <div className="BuyurtmaMagazinTableCard">
                <table className="BuurtmaMagazinTable">
                    <thead>
                        <tr>
                            <th className="tushumlarTh">Maxsulot nomi</th>
                            <th className="tushumlarTh">Maxsulot rangi</th>
                            <th className="tushumlarTh">Maxsulot o`lchami</th>
                            <th className="tushumlarTh">Maxsulot soni</th>
                            <th className="tushumlarTh">Buyurtma holati</th>
                        </tr>
                    </thead>

                    <tbody>
                        {SotuvTableData.map((element, value) => {
                            return (
                                <tr>
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
        </>
    );
}

export default Sotuv;