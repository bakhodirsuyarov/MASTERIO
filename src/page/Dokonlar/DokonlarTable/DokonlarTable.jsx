import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./DokonlarTable.css";
import fakeeData from "./DokonlarTableData.json";

const DokonlarTable = () => {
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

    return (
        <div>
            <div className="DokonlarTable">
                <table {...getTableProps()} className="Table">
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th className="Tableth" {...column.getHeaderProps()}>
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
                                        <td className="Tableth tr" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    ))}
                                    <button className="Edit_btn">Edit</button>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DokonlarTable;