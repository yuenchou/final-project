import React, { Component } from 'react';
import BuyerReceive from '../../../../../user05/Component/buyer/buyerReceive';
import BuyerMsg from '../../../../../user05/Component/buyer/buyerMsg';
import axios from 'axios';

class Process3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productinfo: []
        }
    }

    componentDidMount() {
        // 從tradeBuyReceive.js的NavLink path 抓取 orderid => this.props.match.params.orderid 
        // 以此為篩選條件從後端SQL撈資料 => 將資料透過props傳給子層
        axios.get(`http://localhost:3000/Vgt/memberPage/buyer/tradereceive/${this.props.match.params.orderid}`)
            .then(
                (response) => {
                    this.setState({ productinfo: response.data })
                }).catch(
                    (err) => console.log(err)
                );
    }

    render() {
        return (
            <div>
                <BuyerReceive productinfo={this.state.productinfo} orderid={this.props.match.params.orderid} />
                <BuyerMsg productinfo={this.state.productinfo} orderid={this.props.match.params.orderid} />
            </div>
        );
    }
}

export default Process3;