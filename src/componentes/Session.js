import React, { Component } from 'react'
import {Query} from 'react-apollo';
import {USUARIO_ACTUAL} from '../queries';


const Session=Component=>props =>(
    <Query query={USUARIO_ACTUAL}>
        {({loading,error,data,refetch})=>{
            
            return <Component {...props} refetch={refetch} session={data}/>
            
        }}    
    </Query>

)
export default Session;
