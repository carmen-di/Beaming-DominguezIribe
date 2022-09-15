import React from 'react'
import Item from '../Item/'
import styles from "./styles.css"

const ItemList = ({products}) => {
  return (
    <div className='cardContenedor'>
        {products.map(product => {
            return <Item key = {product.id} productMostrar = {product}/>
        })}
    </div>
  )
}

export default ItemList