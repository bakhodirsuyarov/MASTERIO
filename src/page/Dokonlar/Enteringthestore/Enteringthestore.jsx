import React from 'react'
import './Enteringthestore.css'
import { useTable } from "react-table";
import fakeData from "./MOCK_DATA.json";

function Enteringthestore() {
    const data = React.useMemo(() => fakeData, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "Maxsulot nomi",
                accessor: "mahsulot_nomi",
            },
            {
                Header: "Maxsulot razmeri",
                accessor: "mahsulot_razmeri",
            },
            {
                Header: "Maxsulot rangi",
                accessor: "mahsulot_rangi",
            },
            {
                Header: "Maxsulot sotish narxi",
                accessor: "mahsulot_sotish_narxi",
            },
            {
                Header: "Maxsulot soni",
                accessor: "mahsulot_soni",
            },
            {
                Header: "Joylashgan joylari",
                accessor: "joylashgan_joylari",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });
    return (
        <div>
            <div className="container">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
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
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {/* ----------------------------------- */}
            {/* <div className="container2">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
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
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div> */}
        </div>
    )
}

export default Enteringthestore