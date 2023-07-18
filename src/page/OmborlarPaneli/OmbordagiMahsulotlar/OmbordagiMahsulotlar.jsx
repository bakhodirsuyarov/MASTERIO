import React from 'react'
import fakeeData from "../../Dokonlar/DokonlarTable/DokonlarTableData.json";
import { useTable } from "react-table";
import './OmbordagiMahsulotlar.css'

function OmbordagiMahsulotlar() {
    const data = React.useMemo(() => fakeeData, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "Maxsulot nomi",
                accessor: "dokon_nomi",
            },
            {
                Header: "Maxsulot rangi",
                accessor: "manzili",
            },
            {
                Header: "Maxsulot o’lchami",
                accessor: "mahsulot_soni",
            },
            {
                Header: "Maxsulot soni",
                accessor: "savdosi",
            },
            {
                Header: "Maxsulot joylashgan joylarii",
                accessor: "valyutasi",
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
        <div className='OmborlarPaneli'>
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

export default OmbordagiMahsulotlar