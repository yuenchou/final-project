import React, { Component } from 'react';
import DealerFinishTrade from '../../../../../user05/Component/dealer/dealerFinishTrade';
import axios from 'axios';


class DealerProcess2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productinfo:[]
         }
    }

    componentDidMount () {
        axios.get(`http://localhost:3000/VGT/memberPage/seller/tradesellercomplete/${this.props.match.params.orderid}`)
        .then(
            (res) => {
                this.setState({ productinfo: res.data })
            }).catch(
                (err) => console.log(err)
            );
    }
    
    render() { 
        return ( 
            <div>
                <DealerFinishTrade productinfo={this.state.productinfo} />
            </div>
         );
    }
}
 
export default DealerProcess2;