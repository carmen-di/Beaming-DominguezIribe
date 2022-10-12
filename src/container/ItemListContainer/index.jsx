import React from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList'
import useFirebase from '../../hooks/useFirebase'
// import {db} from '../../firebase/config'
// import {collection, query, where, getDocs} from "firebase/firestore";
import Loader from '../../components/Loader/loader'
import './styles.css'

const ItemListContainer = () => {

  const {categoryId} = useParams();

  const [loading, productos, error] = useFirebase(categoryId);

  // useEffect(()=> {
    
  //   (async ()=> {
  //       try {
  //         const q = categoryId 
  //           ?query(
  //             collection(db, "products"), 
  //             where("category", "==", categoryId)
  //             )
  //           :query(collection(db, "products"));

  //         const querySnapshot = await getDocs(q);
  //         const productosFirebase = [];

  //         querySnapshot.forEach((doc) => {
  //           productosFirebase.push({ id: doc.id, ...doc.data() })
  //         });

  //         setProductos(productosFirebase)

  //     } catch (error) {
  //     }
  //   })()
  // }, [categoryId])

  return (
    <>
      {/* <div><h2>{greeting}</h2></div> */}
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