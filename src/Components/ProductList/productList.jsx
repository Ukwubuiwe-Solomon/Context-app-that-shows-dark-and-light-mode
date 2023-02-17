import React from 'react'
import "./ProductList.css"
import Product from "../Product/Product"


const productList = () => {
  return (
    <div>
        <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Create & Inspire. It's TopTech</h1>
            <p className="pl-desc">
                TopTech is a creative Tech Company that your work has been waiting for,
                beautiful homes, stunning portfolio styles & a whole lot more inside.
            </p>
        </div>
        <div className="pl-list">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          
        </div>
      </div>
    </div>
  )
}

export default productList

