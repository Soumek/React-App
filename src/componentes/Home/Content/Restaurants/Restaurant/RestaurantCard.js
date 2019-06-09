import React from "react";
import Card from "react-bootstrap/Card";
import Pinchos from "../../../../../assets/img/pinchos_pollo.jpg";
import styled from "styled-components";
import { Icon, RestaurantContentWrapper } from "../../../HomeStyles";
import { resto } from "../../../../../assets/constantes/fuentes";
const RCard = styled(Card)`
  ${resto};
  height: 25rem;
  margin-bottom: 56px;
  padding-right: 30px !important;
  @media (max-width: 576px) {
    height: 23rem;
    padding-right: 10px !important;
    margin: 0px;
  }
  > div.CardWrapper {
    position: relative;
    @media (max-width: 576px) {
      width: 100%;
      padding-right: 10px !important;
    }
    > div.card-img {
      width: 100%;
      height: 100%;
      @media (max-width: 576px) {
        height: 8rem;
      }
    }
    > div.card-body {
      border: 1px solid rgb(80, 80, 80, 0.25);
    }
    > div.RCardBasket {
      position: absolute;
      z-index: 10;
      visibility: hidden;
      opacity: 0;
      height: 80px;
      width: 100%;
      transition: all 500ms cubic-bezier(0.25, 0.1, 0.25, 1);
      @media (max-width: 576px) {
        height: 60px;
      }
      @media (max-width: 468px) {
        height: 40px;
      }
      > div.col-2 {
        background: #ffbb00;
        > i {
          color: white;
        }
      }
      > div.col-10 {
        background: #49d295;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }
    }
    > div.product-info {
      > div.card-title.h5 {
        @media (max-width: 468px) {
          font-size: 1rem;
        }
      }
      > p.card-text {
        @media (max-width: 468px) {
            font-size: 0.8rem;
          }
        > span.RCardPrecio {
          color: #cccccc;
          
        }
        > span.RCardPrecio ~ span {
          color: #49d295;
          font-size: 1.25rem;
          font-weight: bold;
        }
      }
    }
  }

  &:hover {
    > div.CardWrapper > div.RCardBasket {
      transform: translateY(-80px);
      visibility: visible;
      opacity: 1;
      transition: all 500ms cubic-bezier(0.25, 0.1, 0.25, 1);
      @media (max-width: 576px) {
        transform: translateY(-60px);
      }
      @media (max-width: 468px) {
        transform: translateY(-40px);
      }
    }
  }
`;
export default function RestaurantCard(props) {
  const { productos } = props;
  return (
    <RestaurantContentWrapper className="row">
      {productos.map((producto, index) => (
        <RCard
          className="col-md-4 col-sm-6 col-6 px-0 d-flex justify-content-center align-items-center"
          key={index}
        >
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
            <Card.Body className={`${producto.descuento} product-info`}>
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
      ))}
    </RestaurantContentWrapper>
  );
}
