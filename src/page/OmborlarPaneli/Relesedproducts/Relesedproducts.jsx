import React from 'react'
import './Relesedproducts.css'
import IncomingOrderTable from './IncomingOrderTable/IncomingOrderTable'
import OutputProducts from './OutputProducts/OutputProducts'

function Relesedproducts() {
    return (
        <div className='Relesedproducts'>
            <h1 className='Relesedproducts_h1'>Tushgan buyurtmalar</h1>
            <IncomingOrderTable />
            <h1 className='Relesedproducts_h1'>Maxsulot chiqarish</h1>
            <OutputProducts />
        </div>
    )
}

export default Relesedproducts