import React from 'react'

function MaxsulotlarModal() {
    
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')

  console.log(employeeData);

  const create = () => {
    employeeData.push(
      {
        title: inp1,
        tel: tel,
        Passport: pass,
        image: rasm1
      }
    )
    console.log(employeeData);
  }

  employeeData.map((element, value) => {
    return <div className='cart-inner'>
      <h3>{element.maxsulotnomi}</h3>
      <h4>{element.olchami}</h4>
      <h4>{element.rangi }</h4>
      <button className='employee-btn'>Edit</button>
    </div>
  })
  return (
    <div>
         <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="CreateShop">
            <input onChange={(e) => setInp1(e.target.value)} className="CreateShopinput" type="text" placeholder="Name" />
            <input onChange={(e) => setTel(e.target.value)} className="CreateShopinput" type="text" placeholder="size" />
            <input onChange={(e) => setPass(e.target.value)} className="CreateShopinput" type="text" placeholder="color" />
          </div>
          <div className="footer">
            <button className="Createbtn" onClick={create}>
              Create
            </button>
          </div>
        </div>
    </div>
  )
}

export default MaxsulotlarModal