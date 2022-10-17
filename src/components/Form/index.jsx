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

    const [loading, setLoading] = useState(false);

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
            precioTotal
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
        setLoading(false);
        Swal.fire(
            'Gracias por su compra! ',
            `Número de pedido: ${docRef.id}`,
            'success'
        ) 
        nav(`/`);
    }

    return ( 
        <>
        {loading ? 
            <Loader/>
            :
            <div className='formulario'>
                <h3>Datos de contacto</h3>
                <form  onSubmit= {handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input className='formImput' type="text" name='nombre'  onChange={saveData} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Apellido</label>
                        <input className='formImput' type="text" name='apellido' onChange={saveData} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Email</label>
                        <input className='formImput' type="email" name='email' onChange={saveData} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Teléfono</label>
                        <input className='formImput' type="number" name='telefono' onChange={saveData} required/>
                    </div>
                    <Button type='submit' variant="outline-dark">Finalizar compra</Button>
                </form>
            </div>
            
        }
        </>
    )
}

export default Form 