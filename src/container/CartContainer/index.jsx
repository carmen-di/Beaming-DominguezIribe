import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/CartContext'
import CartItem from '../../components/CartItem';
import Button from 'react-bootstrap/Button';
import './styles.css'

const Cart = () => {

  const {cart, removeItem} = useContext(Shop);

  const nav = useNavigate();
  const redireccion = () => {
    nav(`/`);
  };

  return(
    <div>
      {cart.length ? (
        ((<button onClick={removeItem}> </button>),
        cart.map((cartProds) => {
          return <CartItem key={cartProds.id} cartProds={cartProds} />;
        }))
      ) : (
        <div>
          <h1>El carrito de compras está vacío.</h1>
          <Button className='btnVolver' variant="outline-dark" onClick={redireccion}>Volver Al Inicio</Button>
        </div>
      )}
    </div>
  )
}

export default Cart