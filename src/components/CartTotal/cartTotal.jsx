import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Shop } from '../../context/CartContext';
import ordenGenerada from '../../services/generarOrden';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import './styles.css'

const CartTotal = () => {
    const { cart, total } = useContext(Shop);

    const [loading, setLoading] = useState(false);

    const handleBuy = async () => {
        setLoading(true)
        const precioTotal = total();
        const orden = ordenGenerada("Carmen", "carmen@gmail.com", 387587456, cart, precioTotal);
        console.log(orden);

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
        setLoading(false);
        alert(
            `Gracias por su compra! Número de orden: ${docRef.id}`
        );
    };

  return (
    <div>
        <h3>Total: {total()}$</h3>
        <Button variant="outline-dark" onClick={handleBuy}>Confirmar compra</Button>
    </div>
  )
}

export default CartTotal