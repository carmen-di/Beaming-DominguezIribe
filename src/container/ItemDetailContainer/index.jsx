import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import {doc, getDoc} from "firebase/firestore";
import {db} from '../../firebase/config';
import Loader from '../../components/Loader/loader'
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ItemDetailContainer = () => {
    
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();


    useEffect(() => {
        const getProducts = async () => {
            try{
                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProductDetail({id: docSnap.id, ...docSnap.data()});
                } else {
                    MySwal.fire({
                        icon: 'error',
                        text: 'Oops, producto no encontrado! '
                    }) 
                }
            } catch (error) {
            }
        }
        getProducts();
    }, [productId])
    
    return (
        <div>
            {productDetail.id ? (
                <ItemDetail product={productDetail}/>
            ) : (
                <Loader/>
            )}
        </div> 
    );
}

export default ItemDetailContainer;