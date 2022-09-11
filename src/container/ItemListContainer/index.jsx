import React, {useEffect, useState} from 'react'
// import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'
// import {products} from '../../data/products'
import './styles.css'

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  useEffect(()=> {
    
    (async ()=> {
      // const obtenerProductos = new Promise ((accept, reject)=> {
      //     setTimeout(()=> {
      //       accept(products)
      //     }, 3000);
      //   })
      
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const productos = await response.json();
          setProductos(productos);
        } catch (error) {
          console.log(error);
        }

      })()

  }, [])

  console.log(productos)

  // const agregarAlCarrito = (cantidad) => {
  //   console.log(cantidad);
  //   console.log(`Se agregó la cantidad ${cantidad} al carrito!`);
  // }
  return (
    <><div>
      <h2>{greeting}</h2>
      {/* <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/> */}
      </div><div className='item-list-container'>
        <ItemList products= {productos}/>
      </div></>
  )
}

export default ItemListContainer