import React from 'react'
import NoMatch from './NoMatch'
import {withRouter} from 'react-router-dom'
function CaptureRouteNotFound({children,location}) {
    return location && location.state && location.state.notFoundError ? <NoMatch /> : children;
}
export default withRouter(CaptureRouteNotFound);


  