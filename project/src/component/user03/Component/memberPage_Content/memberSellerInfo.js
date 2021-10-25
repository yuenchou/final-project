import React, { Component } from 'react';
import SellIndex from '../memberPage_Content/sellerInfo/sell_index';


class SellerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="container">
               <SellIndex/>
            </div>
        );
    }
}


export default SellerInfo;