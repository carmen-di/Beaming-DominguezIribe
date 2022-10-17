import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {FaTrash} from 'react-icons/fa';
import { Shop } from '../../context/CartContext'
import Button from 'react-bootstrap/Button';
import './styles.css'

const CartItem = () => {
  const {cart, removeItem, clearCart, total} = useContext(Shop);

  const nav = useNavigate();
  const redireccion = () => {
    nav(`/`);
  };

  const handleForm = () => {
    nav(`/form`);
  };

  return (
    cart.length ?
    <div>
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
      </div>
      <h4>Total: {total()}$</h4>
      <Button className= 'btnVaciar' variant="outline-danger" onClick={clearCart}>Vaciar carrito</Button>
      <Button className= 'btnConfirm' variant="outline-dark" onClick={handleForm}>Confirmar compra</Button>
    </div>
    :
      <div>
        <h1>El carrito de compras está vacío.</h1>
        <Button className='btnVolver' variant="outline-dark" onClick={redireccion}>Volver Al Inicio</Button>
      </div>
  );
}

export default CartItem