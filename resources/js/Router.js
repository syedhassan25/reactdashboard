import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import NotFound from './views/NotFound/NotFound'


const Main = props => (
<Switch>
 
  <Route exact path='/' component={Home}/>
  
  <Route path='/login' component={Login}/>
  <Route path='/register' component={Register}/>
  
 
 
  <Route component={NotFound}/>
</Switch>
);
export default Main;