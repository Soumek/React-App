import React from "react";
import Card from "react-bootstrap/Card";
import Pinchos from "../../../../../assets/img/pinchos_pollo.jpg";
import styled from "styled-components";
import { Icon } from "../../../../Layout/HeaderStyles";
const RCard = styled(Card)`
  margin-bottom: 56px;
  padding-right:30px !important;
  
  >div.CardWrapper{
    position: relative;
  }
  >div.CardWrapper> div.card-img {
    width: 329.88px;
    height: 277.41px;
  }
  >div.CardWrapper> div.card-body {
    border: 1px solid rgb(80, 80, 80, 0.25);
    
  }
  >div.CardWrapper>div.RCardBasket {
    position: absolute;
    z-index: 10;
    visibility:hidden;
    opacity:0;
    height:80px;
    width: 100%;
    transition: all 500ms cubic-bezier(0.25,0.1,0.25,1);
  }
 
  &:hover{
    >div.CardWrapper>div.RCardBasket{
        transform: translateY(-80px);
        visibility:visible;
        opacity:1;
        transition: all 500ms cubic-bezier(0.25,0.1,0.25,1);
    }
  }
  >div.CardWrapper>div.RCardBasket>div.col-2{
      background:#FFBB00;

  }
  >div.CardWrapper>div.RCardBasket>div.col-2>i{
      color:white;
  }
  >div.CardWrapper>div.RCardBasket>div.col-10{
      background:#49D295;
      color:white;
      font-weight:bold;
      cursor:pointer;
  }
  >div.CardWrapper>*> p.card-text > span.RCardPrecio {
    color: #cccccc;
  }
  >div.CardWrapper>*> p.card-text > span.RCardPrecio ~ span {
    color: #49d295;
    font-size: 1.25rem;
    font-weight: bold;
    
  }
`;
export default function RestaurantCard(props) {
  const { productos } = props;
  return productos.map((producto, index) => (
    <RCard className="col-md-4 px-0" key={index}>
    <div className="CardWrapper">
      <Card.Img variant="top" src={Pinchos} />
      <div className="RCardBasket row no-gutters">
        <div className="col-2 d-flex justify-content-center align-items-center">
          <Icon className="fa fa-shopping-basket" />
        </div>
        <div className="col-10 d-flex justify-content-center align-items-center">
          <span>Añadir a la cesta</span>
        </div>
      </div>
      <Card.Body className={producto.descuento}>
        <Card.Title>{producto.titulo}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text>
          <span className="RCardPrecio">PRECIO</span>
          <br />
          <span>${producto.precio}</span>
        </Card.Text>
      </Card.Body>
    </div>
    </RCard>
  ));
}
