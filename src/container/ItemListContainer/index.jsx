import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList'
import {db} from '../../firebase/config'
import {collection, query, where, getDocs} from "firebase/firestore";
import './styles.css'

const ItemListContainer = ({greeting}) => {

  console.log(db);

  const [productos, setProductos] = useState([])

  const {categoryId} = useParams();

  console.log(categoryId);

  useEffect(()=> {
    
    (async ()=> {
        try {
          const q = categoryId 
            ?query(
              collection(db, "products"), 
              where("category", "==", categoryId)
              )
            :query(collection(db, "products"));

          const querySnapshot = await getDocs(q);
          const productosFirebase = [];

          querySnapshot.forEach((doc) => {
            productosFirebase.push({ id: doc.id, ...doc.data() })
          });

          setProductos(productosFirebase)

      } catch (error) {
          console.log(error);
      }
    })()
  }, [categoryId])

  return (
    <>
      <div><h2>{greeting}</h2></div>
      <div className='item-list-container'>
        <ItemList products= {productos}/>
      </div>
    </>
  )
}

export default ItemListContainer