import React from 'react'
import Item from '../Item/'

const ItemList = ({products}) => {
  return (
    <div>
        {products.map(product => {
            return <Item key = {product.id} productMostrar = {product}/>
        })}
    </div>
  )
}

export default ItemList