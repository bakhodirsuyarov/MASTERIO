import React, { useState } from 'react'
import { products } from './MaxsulotData'
import "./Maxsulotlar.css"


function Maxsulotlar() {
    const [btn, setBtn] = useState(false)

    return (
        <div className='a' >
            <div className='maxsulot'>
                <button onClick={() => setBtn(true)} className='addbtn' >Add Product</button>
                <div className="maxsulotlar">
                    {
                        products.map((item, value) => (
                            <div className="cards_father">
                                <div className='cards' >
                                    <div className="cards-left">
                                        <h1 className='maxsulotnomi' >Maxsulot nomi: <span className='maxsulotSpan'>{item.maxsulotnomi}</span></h1>
                                        <h1 className='maxsulotnomi'>O`lchami: <span className='maxsulotSpan'>{item.olchami}</span></h1>
                                        <h1 className='maxsulotnomi'>Rangi: <span className='maxsulotSpan'>{item.rangi}</span></h1>
                                        <h1 className='maxsulotnomi'>Kirib kelgan narxi: <span className='maxsulotSpan'>{item.kiribKelganNarxi}</span></h1>
                                        <h1 className='maxsulotnomi'>Sotish narxi: <span className='maxsulotSpan'>{item.sotishNarxi}</span></h1>
                                    </div>
                                    <div className="cards-right">
                                        <button className='editbtn ,maxsulotnomi' >Edit</button>
                                        <button className='editbtn' >Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Maxsulotlar