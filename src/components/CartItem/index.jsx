import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {FaTrash} from 'react-icons/fa';
import { Shop } from '../../context/CartContext'
import Button from 'react-bootstrap/Button';
import './styles.css'

const CartItem = () => {
  const {cart, removeItem} = useContext(Shop);

  const nav = useNavigate();
  const redireccion = () => {
    nav(`/`);
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
    </div>
    :
      <div>
        <h1>El carrito de compras está vacío.</h1>
        <Button className='btnVolver' variant="outline-dark" onClick={redireccion}>Volver Al Inicio</Button>
      </div>
  );
}

export default CartItem