import React from 'react'
import { useTable } from "react-table";
import fakeData from "../Enteringthestore/MOCK_DATA.json";

function ListofClients() {
    const data = React.useMemo(() => fakeData, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "Ismi",
                accessor: "mahsulot_nomi",
            },
            {
                Header: "Tel raqami",
                accessor: "mahsulot_razmeri",
            },
            {
                Header: "Oxirgi sotib olgan narsasi",
                accessor: "mahsulot_rangi",
            },
            {
                Header: "Xabar berish oralig`i",
                accessor: "mahsulot_sotish_narxi",
            },
            {
                Header: "Holati",
                accessor: "mahsulot_soni",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });
    return (
        <div className='ListofClients'>
            <table className='table1' {...getTableProps()}>
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
    )
}

export default ListofClients