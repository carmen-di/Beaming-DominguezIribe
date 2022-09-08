import React from 'react'
import Card from 'react-bootstrap/Card';

const Item = ({productMostrar}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/568/691/products/chloe-oro-21-c472d60dfaff05b6ad16487481226842-640-0.jpg" />
      <Card.Body>
        <Card.Title>{productMostrar.nombre}</Card.Title>
        <Card.Text>{productMostrar.descripcion}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Item