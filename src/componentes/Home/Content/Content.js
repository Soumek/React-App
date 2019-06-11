import React, { Component, Fragment } from "react";
import { withRouter, Switch } from "react-router-dom";
// import RouteWithSubRoutes from "../../RouteWithSubRoutes";
import RouteWithSubRoutesJson from "../../RouteWithSubRoutesJson";
import { ContentWrapper} from "../HomeStyles";
import { CSSTransition } from "react-transition-group";
import HomeContent from "./HomeContent";
import AdminContent from "../../Admin/AdminContent";
import Session from "../../Session";
class Content extends Component {
  handleContentView=()=>{
    const actualView=this.props.match.url
    switch (actualView) {
      case "/home":{
        return <HomeContent/>;
      } break;
      case "/admin":{
        return <AdminContent session={this.props.session.obtenerUsuario}/>
      }
      default:
        break;
    }
  }
  render() {
    const { routes } = this.props;
    return (
      <CSSTransition
        timeout={500}
        in={this.props.asideGone}
        classNames="content"
      >
        <Fragment>
          {console.log(this.props.match.url)}
          <ContentWrapper className="col-md-9 mt-4 container">
            {
              this.handleContentView()
            }

            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutesJson key={i} {...route} />
              ))}
            </Switch>
          </ContentWrapper>
        </Fragment>
      </CSSTransition>
    );
  }
}
export default Session(withRouter(Content));
