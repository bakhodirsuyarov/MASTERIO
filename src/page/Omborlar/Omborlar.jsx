import React, { useState } from 'react'
import './Omborlar.css'
import OmborlarTable from './OmborlarTable/OmborlarTable'
import OmborlarModal from './OmborlarModal/OmborlarModal';
function Omborlar() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className='Omborlar'>
            <button
                className="openModalBtnOmborlar"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                Do`kon qo`shish
            </button>

            {modalOpen && <OmborlarModal setOpenModal={setModalOpen} />}
            <OmborlarTable />
        </div>
    )
}

export default Omborlar