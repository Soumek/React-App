import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import {secondary,primary} from "../../assets/constantes/colores";
import {titulos,resto} from "../../assets/constantes/fuentes";


export const Icon = styled.i`
  font-size: 1.5em;
  color: tomato;
  cursor: pointer;
`;
export const HomeContainer = styled.section`
  background-color: #FAFDFF;
`;
export const ContentWrapper=styled.section`

`;
export const NavAside = styled.aside`
  border-right: 3px solid tomato;
   
  >div.flex-column{
    position:sticky;
    top:0px; 
  }
`;

export const NavItem = styled(NavLink)`
  padding: 20px;
  width: 100%;
  color: black;
  > span {
    padding-left: 10px;
  }
  &:hover {
    border-left: 5px solid tomato;
    text-decoration: none;
    color: black;
  }
 
  &.active{
    border-left: 5px solid tomato;
  }
`;


export const ContentTitle = styled.div`
  border-bottom: 0.1px solid ${primary};
  >h2{
    color:#505050;
  }
`;

export const BCarousel = styled(Carousel)`
  height: 540px;
  border-radius: 5px;
  > div {
    height: 540px;
    border-radius: 20px;
  }
  >div>*>img{
    height:100%;
  }
  >div.carousel-inner>div.carousel-item{
    height:100%;
  }
  > ol.carousel-indicators > li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid white;
    opacity: 1;
    &:hover {
      background: white !important;
    }
    &:active {
      background: white;
    }
  }
  > ol.carousel-indicators > li.active {
    background: white;
  }
`;
/*Compontente Restaurant*/
export const RestaurantContentWrapper=styled.div`

@media (max-width:768px){
  margin-top:4rem;
}

`;
export const HCarousels = styled.div`
  height: 142px;
  position: relative;
  
  > div.alice-carousel,
  > div.alice-carousel > div,
  > div.alice-carousel > div > div.alice-carousel__wrapper,
  > div.alice-carousel > div > div.alice-carousel__wrapper > ol > li{
    height: 142px;
  }
 
`;

export const HCarouselButtons = styled.button`
  position: absolute;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.16);
  width: 80px;
  top: 0px;
  height: 142px;
  display: flex;
  align-items: center;
  justify-content:center;
  font-size:2rem;
  &:focus{
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.16);
  }
`;
export const HCarouselButtonsPrev = styled(HCarouselButtons)`
  /* right: 0px; */
  left: 0px;
  text-align: left;
`;
export const HCarouselButtonsNext = styled(HCarouselButtons)`
  
  right: 0px;
  text-align: right;
`;
export const HCarouselIcon = styled(Icon)`
  color: black;
`;

/*Resultados de restaurants*/
export const Rheader=styled.header`
${titulos};
height:60px;
 >*>.col-md-3{
   border:1px solid #FFA528;
   border-radius:10px;
 }
 >*>.col-md-3>img{
   width:50px;
   height:50px;
   border-radius:50%;
 }
 >.row,>.row>div{
   height:60px;
 }
 >*>.col-md-3>span{
   font-size:1.1rem;
   color:#49D295;
   line-height:24px;
 }
`;


export const Spacer=styled.div`
height:15px;
background-color:#F7F7F7;
border:1px solid #E5EDEF;
`;

/*Card contents*/
