import React from 'react'
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';
import './styles.css'

const Item = ({productMostrar}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/detail/${productMostrar.id}`)
  }

  return ( 
    <Card style={{ width: '18rem' }} onClick={handleNavigate}>
      <Card.Img className='imagen' variant="top" src= {productMostrar.image} width= {250} height={300}/>
      <Card.Body>
        <Card.Title className='title'>{productMostrar.title}</Card.Title>
        <Card.Text className='price'>${productMostrar.price}</Card.Text>
        <Card.Text className='description'>{productMostrar.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Item