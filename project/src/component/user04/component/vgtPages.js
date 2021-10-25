import Nav from './backEnd/vgtNav';
import React, { Component } from 'react';
import '../../user03/css/style03.css';



class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
          
            <div className="container">
             <Nav />
            </div>
        );
    }
}

export default Pages;
