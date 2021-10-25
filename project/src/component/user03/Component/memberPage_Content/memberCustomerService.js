import React, { Component } from 'react';
import AppealIndex from '../../../user02/Component/appeal_index';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';

class CustomerService extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <AppealIndex/>
            </div>            
        );
    }
}
 
export default CustomerService;