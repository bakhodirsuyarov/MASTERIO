import React from 'react'
import "./Modal.css"

export default function Modal() {
  return (
    <div className='modal'>
      <div className="modal-wrapper">
      <div className="modal-inner">
        <input type="text"  placeholder='name'/>
        <input type="text" placeholder='phone number'/>
        <input type="text" placeholder='passport'/>
      </div>
      </div>
    </div>
  )
}