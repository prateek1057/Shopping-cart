import React, { Component } from 'react';
class Navbar extends Component {

totalNum(){
    const num=this.props.counterlist.filter(c=> c.value>0).length;
    return num;
}
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar
                <span className="badge badge-pill badge-secondary m-2">{this.totalNum()}</span>
                </a>
            </nav>
        );
    }
}
 
export default Navbar;