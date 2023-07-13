import React, { useState } from 'react'
import './Dokonlar.css'
import DokonlarModal from './DokonlarModal/DokonlarModal';
import DokonlarTable from './DokonlarTable/DokonlarTable';

function Dokonlar() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='Dokonlar'>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Do`kon qo`shish
      </button>

      {modalOpen && <DokonlarModal setOpenModal={setModalOpen} />}

      <DokonlarTable />
    </div>
  )

}
export default Dokonlar