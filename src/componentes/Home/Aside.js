import React, { Component} from "react";
import {NavAside} from "./HomeStyles";
import { withRouter } from "react-router-dom";
import HomeAside from "./HomeAside";
import AdminAside from "../Admin/AdminAside";
class Aside extends Component {
  
  handleAsideView = () => {
    const actualView = this.props.match.url;
    switch (actualView) {
      case "/home": {
        return <HomeAside routes={this.props.routes} />
        break;
      }
      case "/admin": {
        return <AdminAside routes={this.props.routes} />
        break;
      }
      default:
        break;
    }
  };
  render() {
    return (
      <NavAside className="col-md-2 px-0 ">
        <div className="d-flex align-items-start flex-column">
          {this.handleAsideView()}
        </div>
      </NavAside>
    );
  }
}
export default withRouter(Aside);
