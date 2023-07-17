import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./DokonlarTable.css";
import fakeeData from "./DokonlarTableData.json";
import { useNavigate } from "react-router-dom";

const DokonlarTable = () => {
    const navigate = useNavigate()
    const data = React.useMemo(() => fakeeData, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "Dokon nomi",
                accessor: "dokon_nomi",
            },
            {
                Header: "Manzili",
                accessor: "manzili",
            },
            {
                Header: "Mahsulot soni",
                accessor: "mahsulot_soni",
            },
            {
                Header: "Savdosi",
                accessor: "savdosi",
            },
            {
                Header: "Valyutasi",
                accessor: "valyutasi",
            },
            {
                Header: "Xodimlar soni",
                accessor: "xodimlar_soni",
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

    const Enteringthestore = () => [
        navigate('/enteringthestore')
    ]

    return (
        <div>
            <table className='dokonlartable' {...getTableProps()}>
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
                            <tr onClick={Enteringthestore} {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DokonlarTable;