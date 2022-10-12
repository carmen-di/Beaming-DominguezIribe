import {collection, query, where, getDocs} from "firebase/firestore";
import {useEffect, useState} from 'react'
import {db} from '../firebase/config'

const useFirebase = (categoryId) => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    const [error, setError] = useState('')

    useEffect(()=> {
    
        (async ()=> {
            try {
                setLoading(true);
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
                setError(error.message)
            }        
              setLoading(false)
        })()
    }, [categoryId])

  return [loading, productos, error];
}

export default useFirebase