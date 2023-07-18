import React, { useState } from 'react'
import './Buyurtmalar.css'
import BuyurtmalarTable from './BuyurtmalarTable/BuyurtmalarTable'
import BuyurtmalarModal from './BuyurtmalarModal/BuyurtmalarModal';

function Buyurtmalar() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className='Buyurtmalar'>
            <button
                className="BuyurtmalarModalOpenbtn"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                Do`kon qo`shish
            </button>

            {modalOpen && <BuyurtmalarModal setOpenModal={setModalOpen} />}
            <BuyurtmalarTable />
        </div>
    )
}

export default Buyurtmalar