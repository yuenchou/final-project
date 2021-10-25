import React, { Component } from 'react';
import '../../css/myStyle05.css';
import { NavLink, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

class BuyerCartBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick = (e) => {
        e.preventDefault();
        var myproduct = this.props.productinfo
        myproduct.map((product) => {
            if (product.checked) {
                var data = {
                    cartvgtid: product.cartvgtid,
                    productprice: product.productprice,
                    cartnum: product.cartnum,
                    checked: 1
                }
                axios.post(`http://localhost:3000/Vgt/memberPage/buyerInfo/tradeCart/${product.productid}`, data)
                    .then(
                        res => console.log(res)
                    ).catch(
                        err => console.log(err)
                    )
            }
        })
        
        setTimeout(() => {
            window.location.replace("/VGT/memberPage/buyer/tradecart");
        }, 1000);
    }

    render() {
        return (
            <div className="d-flex flex-row justify-content-end" style={{ lineHeight: "40px" }}>
                <div className="mx-5">
                    總金額:$ {this.props.totalprice}
                </div>
                <button onClick={this.handleClick} className="btn">
                    前往結帳
                </button>
            </div>
        );
    }
}

export default BuyerCartBtn;