import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./BuyutmalarDirektor.css";
import fakeData from "./BuyurtmalarDirektorData.js";
import { useNavigate } from "react-router-dom";
import BuyurtmaDirektorClick from "./BuyurtmaDirektorClick";

const BuyurtmalarDirektor = () => {
 
  const navigate = useNavigate();
  useNavigate(<BuyurtmaDirektorClick />);

  return (
    <div>
    <div className="containerr">
    <table className="buyurtma_direktor_table">
          <thead>
            <tr>
              <th className="tushumlarTh">Shartnoma raqami</th>
              <th className="tushumlarTh">Davlat nomi</th>
              <th className="tushumlarTh">Shartnoma raqami</th>
              <th className="tushumlarTh">Sanasi</th>
              <th className="tushumlarTh">Holati</th>
            </tr>
          </thead>

          <tbody>
            {fakeData.map((element, value) => {
              return (
                <tr>
                  <td> {element.shartnoma_raqami} </td>
                  <td> {element.davlat_nomi} </td>
                  <td> {element.shartnoma_raqami} </td>
                  <td> {element.sanasi} </td>
                  <td> {element.holati} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
    
    </div>
  );
};

export default BuyurtmalarDirektor;
