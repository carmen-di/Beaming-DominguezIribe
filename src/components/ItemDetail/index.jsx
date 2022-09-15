import React from 'react'
import './styles.css'
import ItemCount from '../ItemCount'


const ItemDetail = ({product}) => {
  return (
    <div>
        <h1>{product.title}</h1>
        <div className='DetailContenedor'> 
        <img src= {product.image} alt="producto detalle" width={400}/>
        <div className='DataDescripcion'>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <ItemCount initial={1} stock={5}/>
        </div>
        </div>
    </div>
  )
}

export default ItemDetail