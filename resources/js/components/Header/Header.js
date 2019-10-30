import React , {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:true
        }
    }
    render(){
        return(
            <nav className="navbar">
        <ul>
          <li><Link to="/">Index</Link></li>
          {this.state.isLoggedIn ? 
           <li className="has-sub"><Link to="/dashboard">Dashboard</Link></li> : ""}
          {!this.state.isLoggedIn ?
            <li><Link to="/login">Login</Link> | <Link to="/register">Register</Link></li> : ""}
        </ul>
      </nav>
        )
    }
}