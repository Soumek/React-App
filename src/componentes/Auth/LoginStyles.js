import styled,{css} from "styled-components";
import { Link } from "react-router-dom";
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';

export const CardWrapper = styled.div`
  height:100vh;
  overflow:hidden;
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
export const CardCol = styled(CardRow)`
 &:first-child{
  background-color:salmon;
  @media(max-width:468px){
    display:none;
  }
 }
`;
export const CardImgL = styled.img`
  height:100%;
  width:100%;
  object-fit:cover;
  opacity:0.3
  /*object-position:0 0;*/
  @media(max-width:768px){
    object-position:6% 0;
  }  
  
`;
export const LogoWrapper=styled.div`
width:100%;
height:50%;
>h2{
  font-size:3rem;
  @media(max-width:468px){
    font-size: 2rem;
  }
}
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
  cursor:pointer;
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
  @media (max-width: 768px) {
    font-size: 0.8rem;
    &:before {
    display:none;
  }

  &:after {
   display:none;
  }


  }
`;

export const AuthInputs=styled.input`
@media (max-width: 768px) {
      font-size: 0.8rem;
  }
@media(max-width:468px){
    font-size: 0.6rem;
    padding:6px;
  }
`;
  /*Para recordar como se aplican estilos a varios elementos.*/
const InputIconStyles=css`
@media (max-width: 768px) {
      font-size: 1rem;
  }
`;

export const Icon = styled.i`
  font-size: 1.5em;
  @media (max-width: 768px) {
      font-size: 1rem;
  }
  @media(max-width:468px){
    font-size: 0.8rem;
  }
`;

export const InputIconM = styled(MailIcon)`${InputIconStyles}`;

export const InputIconL = styled(LockIcon)`${InputIconStyles}`;
export const IconWrapper=styled.span`
background-color:#fff;
`;
export const Button = styled.button`
background-color:tomato;
border-color:tomato;
&:disabled{
background-color:tomato;
border-color:tomato;

}
&:hover{
  border-color:#ff4d2e;
  background-color:#ff4d2e;
}
&:active{
  background-color:#ff4d2e !important;
  border-color:#ff4d2e !important;
}
/* ~& */
@media (max-width: 768px) {
    font-size: 0.8rem;
  }
@media(max-width:468px){
    font-size: 0.6rem;
  }
`;