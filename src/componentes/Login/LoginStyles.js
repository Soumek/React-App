import styled,{css} from "styled-components";
import { Link } from "react-router-dom";
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';

export const CardWrapper = styled.div`
  height:100vh;
  > div.card{
    width:100%;
    height: 540px;
  box-shadow:0px 1px 8px -3px grey;
  }

 
`;
export const CardRow = styled.div`
  height: 100%;
  >div.card-body{
    width:100%;
    height:100%;
  }
`;
export const CardCol = styled.div`
  height: 100%;
`;
export const CardImgL = styled.img`
  height:100%;
`;
export const CardImgRWrapper=styled.div`
width:100%;
height:50%;
`;
export const CardImgR = styled.img`
width:70%;
height:100%;
`

export const PassForgotWrapper = styled.div`
  
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
background-color:tomato;
border-color:tomato;
&:hover{
  border-color:#ff4d2e;
  background-color:#ff4d2e;
}
&:active{
  background-color:#ff4d2e !important;
  border-color:#ff4d2e !important;
}
/* ~& */
`;