import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Shop } from '../../context/CartContext'
import ordenGenerada from '../../services/generarOrden';
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import Loader from '../Loader/loader';
import './styles.css'

const Form = () => {
    const {cart, clearCart, total} = useContext(Shop);
    const precioTotal = total();
    
    const nav = useNavigate();

    const [loading] = useState();

    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        items: cart,
        total: precioTotal
    })   
    
    const saveData = (e) => {
        setData({...data ,[e.target.name] : e.target.value})
    }  
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orden = ordenGenerada(
            data.nombre,
            data.apellido,
            data.email,
            data.telefono,
            cart,
            total
        );

        const docRef = await addDoc(collection(db, "orders"), orden);

        cart.forEach(async (productsCart) => {
            //Primero accedemos a la referencia del producto
            const productRef = doc(db, "products", productsCart.id);
            //Llamamos al snapshot, llamando a firebase
            const productSnap = await getDoc(productRef);
            //En snapshot.data() nos devuelve la información del documento a actualizar
            await updateDoc(productRef, {
                stock: productSnap.data().stock - productsCart.quantity,
            });
        });
        setData({});
        clearCart();
        Swal.fire(
            'Gracias por su compra! ',
            `Número de pedido: ${docRef.id}`
        ) 
        nav(`/`);
    }

    

    return ( 
        <>
        {loading ? 
            <Loader/>
            :
            <div className='formulario'>
                <h2>Datos de contacto</h2>
                <form  onSubmit= {handleSubmit}>
                    <div>
                        <label>Nombre</label>
                        <input className='formImput' type="text" placeholder='Nombre' name='nombre'  onChange={saveData} required/>
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input className='formImput' type="text" placeholder='Apellido' name='apellido' onChange={saveData} required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input className='formImput' type="email" placeholder='Direccion E-mail' name='email' onChange={saveData} required/>
                    </div>
                    <div>
                        <label>Teléfono</label>
                        <input className='formImput' type="number" placeholder='Telefono' name='telefono' onChange={saveData} required/>
                    </div>
                    <button>Finalizar compra</button>
                </form>
            </div>
            
        }
        </>
    )
}

export default Form 