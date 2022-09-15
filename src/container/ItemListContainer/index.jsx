import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
// import ItemCount from '../../components/ItemCount'
import ItemList from '../../components/ItemList'
// import {products} from '../../data/products'
import './styles.css'

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  const {categoryId} = useParams();

  console.log(categoryId);

  useEffect(()=> {
    
    (async ()=> {
        try {
          if (categoryId){
            const response = await fetch("https://fakestoreapi.com/products/category/" + categoryId);
            const productos = await response.json();
            setProductos(productos);
          }
          else {
            const response = await fetch("https://fakestoreapi.com/products");
            const productos = await response.json();
            setProductos(productos);
          }
      } catch (error) {
          console.log(error);
      }
    })()
  }, [categoryId])

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