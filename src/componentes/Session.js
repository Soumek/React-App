import React, { Component,Fragment } from 'react'
import {Query} from 'react-apollo';
import {USUARIO_ACTUAL} from '../queries';


const Session=Component=>props =>(
    <Query query={USUARIO_ACTUAL} fetchPolicy="cache-and-network">
        {({loading,error,data,refetch, networkStatus})=>{
            
            {/* if(networkStatus===7){
                return (<Component {...props} refetch={refetch} session={data}/>);
            } */}
            
            return (<Component {...props} refetch={refetch} session={data}/>);
            
                
            
            
        }}    
    </Query>

)
export default Session;
