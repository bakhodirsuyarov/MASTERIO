import React, { useState } from 'react'
import { Table } from "../../../componentss/Table";
import { Modal } from "../../../componentss/Modal";
import './Enteringthestore.css'

function Enteringthestore() {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            page: "Home",
            description: "This is the main page of the website",
            status: "",
        },
        {
            page: "About Us",
            description: "This page has details about the company",
            status: "",
        },
        {
            page: "Pricing",
            description: "Prices for different subscriptions",
            status: "",
        },
    ]);
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    };

    const handleEditRow = (idx) => {
        setRowToEdit(idx);

        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
        rowToEdit === null
            ? setRows([...rows, newRow])
            : setRows(
                rows.map((currRow, idx) => {
                    if (idx !== rowToEdit) return currRow;

                    return newRow;
                })
            );
    };
    return (
        <div>
            <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            <button onClick={() => setModalOpen(true)} className="btn">
                Add
            </button>
            {modalOpen && (
                <Modal
                    closeModal={() => {
                        setModalOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && rows[rowToEdit]}
                />
            )}
        </div>
    )
}

export default Enteringthestore