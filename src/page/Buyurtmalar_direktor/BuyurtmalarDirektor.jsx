import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./BuyutmalarDirektor.css";
import fakeData from "./BuyurtmalarDirektorData.js";
import { useNavigate } from "react-router-dom";
import BuyurtmaDirektorClick from "./BuyurtmaDirektorClick";

const BuyurtmalarDirektor = () => {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Shartnoma raqami",
        accessor: "shartnoma_raqami",
      },
      {
        Header: "Davlat nomi",
        accessor: "davlat_nomi",
      },
      {
        Header: "Zavod nomi",
        accessor: "zavod_nomi",
      },
      {
        Header: "Sanasi",
        accessor: "sanasi",
      },
      {
        Header: "Holati",
        accessor: "holati",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const navigate = useNavigate()
  useNavigate(<BuyurtmaDirektorClick/>)


  return (
    <div>
      <div className="container">
        <table {...getTableProps()} className="buyurtma_direktor_table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr className=".tr" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="table_td_th th" {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr className="tr" {...row.getRowProps()} onClick={() => navigate(`/buyurtmalar-paneli/${row.id}`)}>
                  {row.cells.map((cell) => (
                    <td className="table_td_th td" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
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
