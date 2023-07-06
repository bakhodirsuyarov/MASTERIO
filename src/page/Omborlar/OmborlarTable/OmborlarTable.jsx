import React from 'react'
import { useTable } from "react-table";
import fakeeData from "../../Dokonlar/DokonlarTable/DokonlarTableData.json";
import './OmborlarTable.css'

function OmborlarTable() {
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
        <div className='OmborlarTable'>
                <table {...getTableProps()} className="TableOmbor">
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th className="TablethOmbor" {...column.getHeaderProps()}>
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
                                    <button className="Edit_btnOmbor">Edit</button>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
    )
}

export default OmborlarTable