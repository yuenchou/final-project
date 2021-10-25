import React, { Component } from 'react';
import BuyerCart from '../../../../../user05/Component/buyer/buyerCart';
import BuyerCheckout from '../../../../../user05/Component/buyer/buyerCheckout';
import axios from 'axios';

class Process1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 2,
            cartInfo: [],
            cartprice: []
        }
    }

    componentDidMount () {
        axios.get(`http://localhost:3000/VGT/memberPage/buyer/tradecart/${this.state.userid}`).then(
            (res) =>
                this.setState({
                    cartInfo: res.data,
                    cartprice: res.data.map((data) =>
                        data.productprice * data.cartnum
                    )
                })
        ).catch(
            err => console.log(err)
        )
    }



    render() {
        return (
            <div key="Process1">
                <BuyerCart cartinfo={this.state.cartInfo} />
                <BuyerCheckout cartinfo={this.state.cartInfo} userid={this.state.userid}
                    cartprice={this.state.cartprice} />
            </div>
        );
    }
}

export default Process1;