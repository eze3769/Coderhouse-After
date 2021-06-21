import React from "react";
import {Card} from 'react-bootstrap';
import { Counter } from "./Counter";
import {Link} from 'react-router-dom'
const Cards = ({id, image,name,precio,stock}) => {
    const onAdd = () =>{
        console.log(`Compraste  de artículos`)
    }

        


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Link to= {`/${id}`}><Card.Title>{name}</Card.Title></Link>
        <Card.Text>
          ${precio} Stock:{stock}
        </Card.Text>
        <Counter stock={stock} onAdd={onAdd} />
      </Card.Body>
    </Card>
  );
};

export default Cards;
