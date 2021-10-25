import React, { Component } from 'react';
import DealerTransfer from '../../../../../user05/Component/dealer/dealerTransfer';
import DealerMsg from '../../../../../user05/Component/dealer/dealerMsg';
import axios from 'axios';

class DealerProcess1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productinfo:[]
         }
    }

    componentDidMount () {
        axios.get(`http://localhost:3000/Vgt/memberPage/seller/tradetransfer/${this.props.match.params.orderid}`)
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
                <DealerTransfer productinfo={this.state.productinfo} orderid={this.props.match.params.orderid} />
                <DealerMsg productinfo={this.state.productinfo} orderid={this.props.match.params.orderid}/>
            </div>
         );
    }
}
 
export default DealerProcess1;