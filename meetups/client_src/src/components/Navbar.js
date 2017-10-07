import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{

    render(){
        return(
            <div>
                <nav className="teal darken-2 z-depth-1">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Meetups</a>
                        <a href="#" data-activates="main-menu" class="button-collapse show-on-large"><i class="fa fa-bars fa-2x"></i></a>
                        <ul id="nav-mobile" className="right waves-effect waves-dark hide-on-small-only">
                            <li className="pulse"><Link to="/"><i className="fa fa-users"></i>Meetups</Link></li>
                        </ul>
                        <ul className="side-nav" id="main-menu">
                            <li><Link to="/" className="waves-effect waves-dark"><i className="fa fa-users"></i>Meetups</Link></li>
                            <li><Link to="/meetups/add" className="waves-effect waves-dark"><i className="fa fa-plus"></i>Add Meetup</Link></li>
                            <li><Link to="/about" className="waves-effect waves-dark"><i className="fa fa-question"></i>About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}