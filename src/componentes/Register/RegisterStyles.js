import styled from "styled-components";
import {primary,secondary} from '../../assets/constantes/colores';
export const LogoWrapper=styled.div`
width:100%;
>h3{
  width:100%;
  font-size:3rem;
  text-align:center;
  color:${secondary};
  span{
    font-weight:bold;
  }
  @media(max-width:576px){
    font-size: 1.5rem;
  }
  }
>h3.forgotTitle{
  font-size:2.5rem;
   
}`;

export const BacktoLogin=styled.span`
cursor: pointer;
`;