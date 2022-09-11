import React from 'react'
import Card from 'react-bootstrap/Card';

const Item = ({productMostrar}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {productMostrar.image} width= {250}/>
      <Card.Body>
        <Card.Title>{productMostrar.title}</Card.Title>
        <Card.Text>${productMostrar.price}</Card.Text>
        <Card.Text>{productMostrar.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Item