import React from 'react';
import {ApolloConsumer} from 'react-apollo';
import {withRouter} from 'react-router-dom';
import {UserNavLink} from './HeaderStyles';

const cerrarSesionUsuario=(cliente,history)=>{
    localStorage.removeItem('token','');
    cliente.resetStore();
    history.push('/');
}
const CerrarSesion = ({history}) =>(
    <ApolloConsumer>
    {
     cliente =>{
         return(
             <UserNavLink
                as="li"
                onClick={()=>cerrarSesionUsuario(cliente,history)}
                tabIndex="0"
             >
                 Cerrar sesión
             </UserNavLink>
         );
     }
    }
    </ApolloConsumer>
)

export default withRouter(CerrarSesion);
