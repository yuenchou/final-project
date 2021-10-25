import React, { Component } from 'react';
import BuyerFinishTrade from '../../../../../user05/Component/buyer/buyerFinishTrade';
import axios from 'axios';

class Process4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productinfo: []
        };
    };

    componentDidMount() {
        axios.get(`http://localhost:3000/Vgt/memberPage/buyer/tradebuyercomplete/${this.props.match.params.orderid}`)
            .then(
                (response) => {
                    this.setState({ productinfo: response.data })
                    
                }).catch(
                    (err) => console.log(err)
                );
    };

    render() {
        return (
            <div>
                <BuyerFinishTrade productinfo={this.state.productinfo} orderid={this.props.match.params.orderid} />
            </div>
        );
    };
};

export default Process4;