import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";




export const Icon = styled.i`
  font-size: 1.5em;
  color: tomato;
  cursor: pointer;
`;
export const HomeContainer = styled.section`
  background-color: #FAFDFF;
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
  border-bottom: 0.1px solid #505050;
`;

