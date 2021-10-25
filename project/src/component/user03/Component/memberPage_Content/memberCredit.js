import React, { Component } from 'react';
import CreditIndex from '../memberPage_Content/credit/credit_index';

class Credit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <CreditIndex/>
            </div>

            
        );
    }
}
 
export default Credit;