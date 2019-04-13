import styled,{css} from "styled-components";
import { Link } from "react-router-dom";
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
export const CardWrapper = styled.div`
  display: grid;
  height: 100vh;
  margin: 0;
  place-items: center center;
  
`;
export const Card = styled.div`
  height: 540px;
  box-shadow:0px 1px 8px -3px grey;
`;
export const CardRow = styled.div`
  height: 100%;
`;
export const CardCol = styled.div`
  height: 100%;
`;
export const CardImgL = styled.img`
  height: 100%;
`;
export const CardImgR = styled.img`
height:50%
width:70%;`;

export const PassForgotWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  text-align: center;
`;
export const PassForgot = styled.span`
 
  &:before,
  &:after {
    content: "";
    display: block;
    width: 70px;
    position: absolute;
    top: 0.9em;
    border-top: 1px solid grey;
  }
  &:before {
    right: 67%;
  }

  &:after {
    left: 67%;
  }
`;

  /*Para recordar como se aplican estilos a varios elementos.*/
const InputIconStyles=css`
`;
export const InputIconM = styled(MailIcon)`${InputIconStyles}`;

export const InputIconL = styled(LockIcon)`${InputIconStyles}`;
export const IconWrapper=styled.span`
background-color:#fff;
`;
export const Button = styled(Link)`
`;