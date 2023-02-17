import React from 'react'
import "./Product.css"
import first from "../../images/five5.jpg"


const Product = () => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        
      </div>
        <img src={first} alt="" className='p-img'/>
        
     
    </div>
  )
}

export default Product