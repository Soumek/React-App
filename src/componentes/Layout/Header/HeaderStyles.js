import styled from "styled-components";
import { Link } from "react-router-dom";
import {secondary} from "../../../assets/constantes/colores";
import {titulos} from "../../../assets/constantes/fuentes";
export const NavHeader = styled.header`
  height: 144px;
  z-index: 5;
  position: relative; /* box-shadow: 0px 1px 8px -3px grey; */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;
export const Nav = styled.nav`
  flex-grow: 1;
`;
export const MenuLogo=styled(Link)`
    color:${secondary};
    text-decoration:none;
    ${titulos}
    font-size:2rem;
    &:hover{
      color:${secondary};
      text-decoration:none;
    }
`;
export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;
  > img {
    width: 50px;
    height: 50px;
  }
  &:focus{
    outline:none;
  }
`;
export const Icon = styled.i`
  font-size: 1.5em;
  color: tomato;
  cursor: pointer;
`;
export const StatusBarWrapper=styled.div`
@media(max-width:768px){
    padding:1rem 0;
  }
`;
export const UserNavMenu = styled.div`
  background-color: white;
  top: 47px;
  width: 90px;
  z-index: 10;
  border:1px solid tomato;
  border-radius:5px;
  box-shadow:0 2px 2px rgba(0,0,0,0.3);
  > ul {
    list-style: none;
    padding-left: 0px;
    text-align: center;
    margin-bottom: 0;
  }
`;
export const UserNavLink=styled(Link)`
  color: black;
  padding: 10px 0px 10px 0px;
  display:block;
  text-decoration:none;
  border-radius: 5px 5px 0px 0px;
  cursor:pointer;
  &:hover{
    color:black;
    text-decoration:none;
    background-color:#f8f9fa;
  }
  &:last-of-type{
    border-radius:0px 0px 5px 5px;
  }

`;

