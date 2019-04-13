import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const NavHeader=styled.header`
height:144px;
box-shadow: 0px 1px 8px -3px grey;
`;
export const Nav =styled.nav`
flex-grow:1;`;


export const UserIcon = styled.div`
width:45px;
height:45px;
border-radius:50%;
overflow:hidden;
cursor:pointer;
>img{
    width:50px;
    height:50px;
} 
`;
export const Icon =styled.i`
font-size:1.5em;
color:tomato;
cursor:pointer;
`;

export const NavAside=styled.aside`
border-right:3px solid tomato;

`;
export const NavItem=styled(Link)`
padding:30px 20px 20px 30px;
width:100%;
color:black;
>span{
    padding-left:10px;
}
&:hover{
    border-left:5px solid tomato;
    text-decoration:none;
    color:black;
}
&:focus{
    border-left:5px solid tomato;
}
`;
export const UserNavMenu=styled.div`
background-color:tomato;
top:47px;
width:90px;
z-index:10;

>ul{
    list-style:none;
    padding-left:0px;
    text-align:center;
    margin-bottom:0;
}
>ul>li{
   color:white;
   padding:5px 0px 5px 0px;
}

`;