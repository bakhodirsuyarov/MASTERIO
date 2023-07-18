import React from 'react'
import fakeeData from "../../../Dokonlar/DokonlarTable/DokonlarTableData.json";
import { useTable } from "react-table";

function OutputProducts() {
    const data = React.useMemo(() => fakeeData, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "Tushgan buyurtma",
                accessor: "dokon_nomi",
            },
            {
                Header: "Do’kon yoki ombor",
                accessor: "manzili",
            },
            {
                Header: "Maxsulot nomi",
                accessor: "mahsulot_soni",
            },
            {
                Header: "Maxsulot rangi",
                accessor: "savdosi",
            },
            {
                Header: "Maxsulot o’lchami",
                accessor: "valyutasi",
            },
            {
                Header: "Maxsulot soni",
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
        <div className='OutputProducts'>
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

export default OutputProducts