import React from 'react'
import {HiShoppingCart} from 'react-icons/hi';
import {useContext} from "react";
import {useNavigate} from 'react-router-dom';
import {Shop} from '../../context/CartContext';
import './styles.css'

const CartWidget = () => {
  const navigate = useNavigate()

  const redireccion = () => {
    navigate('/cart')
  }
  
  const {cart, totalProducts} = useContext(Shop)

  return (
    <div className='carrito'>
          <p>{cart.length ? totalProducts : ''}</p>
          <HiShoppingCart onClick={redireccion}/>
    </div>
  )
}

export default CartWidget