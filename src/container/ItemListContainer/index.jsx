import React from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList'
import useFirebase from '../../hooks/useFirebase'
import Loader from '../../components/Loader/loader'
import './styles.css'

const ItemListContainer = () => {

  const {categoryId} = useParams();

  const [loading, productos, error] = useFirebase(categoryId);

  return (
    <>
      <div>
        {loading ? 
          <Loader /> : <ItemList products= {productos}/>
        }
        {error && <h2>{error}</h2>}
      </div>
    </>
  )
}

export default ItemListContainer