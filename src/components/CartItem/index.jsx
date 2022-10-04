import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react';
import {FaTrash} from 'react-icons/fa';
import { Shop } from '../../context/CartContext'
import ordenGenerada from '../../services/generarOrden';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import './styles.css'

const CartItem = () => {
  const {cart, removeItem, total} = useContext(Shop);

  const nav = useNavigate();
  const redireccion = () => {
    nav(`/`);
  };

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
    cart.length ?
    <div className="contenedorCart">
      <table>
        <thead>
          <tr className='fila'>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th></th>      
          </tr>
        </thead>
        {
          cart.map((item) => {
            const handleRemove = () => {
              removeItem(item.id)
            }    
            return(
              <tbody key={item.id}>
                <tr className="filaItem">
                  <td>{item.quantity}</td>
                  <td> {item.title} <img src={item.image} alt={item.title}/> </td>
                  <td>$ {item.price}</td>
                  <td>$ {(item.quantity * item.price).toFixed(2)}</td>                                    
                  <td>
                  <button className='tacho' onClick={handleRemove}><FaTrash/></button>
                  </td>
                </tr>
              </tbody>
              
            )
          })
        }
      </table>
      <aside className='resumen'>
        <h4>Total: {total()}$</h4>
        <Button className= 'btnConfirm' variant="outline-dark" onClick={handleBuy}>Confirmar compra</Button>
      </aside>
    </div>
    :
      <div>
        <h1>El carrito de compras está vacío.</h1>
        <Button className='btnVolver' variant="outline-dark" onClick={redireccion}>Volver Al Inicio</Button>
      </div>
  );
}

export default CartItem