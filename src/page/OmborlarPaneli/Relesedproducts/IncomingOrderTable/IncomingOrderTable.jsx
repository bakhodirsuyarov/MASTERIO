import React from 'react'
import fakeeData from "../../../Dokonlar/DokonlarTable/DokonlarTableData.json";
import { useTable } from "react-table";
import './IncomingOrderTable.css'

function IncomingOrderTable() {
    const data = React.useMemo(() => fakeeData, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "Do’kon yoki ombor",
                accessor: "dokon_nomi",
            },
            {
                Header: "Maxsulot nomi",
                accessor: "manzili",
            },
            {
                Header: "Maxsulot rangi",
                accessor: "mahsulot_soni",
            },
            {
                Header: "Maxsulot o’lchami",
                accessor: "savdosi",
            },
            {
                Header: "Maxsulot soni",
                accessor: "valyutasi",
            },
            {
                Header: "Holati",
                accessor: ""
            }
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
        <div className='RelesedproductsTable'>
            <table className='omborlarpanelitable' {...getTableProps()}>
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

export default IncomingOrderTable