import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Header from './componentes/Header/Header';
import MainPage from './componentes/MainPage/MainPage';
import Content from './componentes/content/Content';
import NotFound from './componentes/NotFound/NotFound'
const Router = () => (
    <BrowserRouter>
     <div> 
      <Header/>

      <Route exact path="/" component={MainPage} />
      <Route path="/Main PAge" component={MainPage} />
      <Route path="/Otraseccion" component={Content} />

      <Footer/>
    </div>
    </BrowserRouter>
)

export default Router;