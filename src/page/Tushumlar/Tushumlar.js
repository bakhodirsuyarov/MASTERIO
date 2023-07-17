import React, { useState } from 'react';
import './Tushumlar.css'
import Table from 'react-table';
import tushumlarData from './TushumlarData.js';
import SearchIcon from '@mui/icons-material/Search';


function Tushumlar() {

  const [ search , setSearch ] = useState('');

  return (
    <div className='tushumlarCard'>

       <form action="" className='tushumlarForm'>
       <SearchIcon/> <input className='tushumlarInput' type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} /> 
       </form>

       <table className='tushumlarTable'>
         <thead>
          <tr>
            <th className='tushumlarTh'>Maxsulot nomi</th>
            <th className='tushumlarTh'>Summasi</th>
            <th className='tushumlarTh'>Valutasi</th>
            <th className='tushumlarTh'>Sanasi</th>
            <th className='tushumlarTh'>Do`kon nomi</th>
          </tr>
         </thead>

         <tbody>
          {tushumlarData.filter((element) => {
            return search.toLowerCase() === '' ? element : element.maxsulot_nomi.toLowerCase().includes(search)
          }).map((element , value) => {
            return (
              <tr>
                <td className='tushumlarTd'> {element.maxsulot_nomi} </td>
                <td className='tushumlarTd'> {element.summa} </td>
                <td className='tushumlarTd'> {element.valuta} </td>
                <td className='tushumlarTd'> {element.sana} </td>
                <td className='tushumlarTd'> {element.dokon_nomi} </td>
              </tr>
            )
          })}
         </tbody>

       </table>
    

    </div>
  )
}

export default Tushumlar