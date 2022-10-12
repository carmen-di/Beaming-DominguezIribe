import React, {useState} from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';

const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
    else {
      console.warn("No Hay Stock")
    }
  }

  const handleDecrement = () => {
    if (count >= 1){
        setCount(count - 1)
    }
    else{
        console.warn("No podes bajar menos que 0")
    }
  }

  const addCart = () =>{
    onAdd(count)
    setCount(0)
  }
  const stockdispo = stock - count

  useEffect(()=> {
  }, [])

  useEffect(() => {
    console.info("Se actualiza el estado")
  }, [count])

  return (
    <div>
      <h2>{count}</h2>
      <Button variant="outline-dark" onClick= {handleAdd}>+</Button>
      <Button variant="outline-dark" onClick={handleDecrement}>-</Button>
      <Button variant="outline-dark" onClick={()=> onAdd(count)}>Agregar al carrito</Button>
      <h3>Stock Disponible {stockdispo}</h3>
    </div>
  )
}

export default ItemCount;