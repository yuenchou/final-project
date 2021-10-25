import React, { Component } from 'react';
import '../../css/myStyle05.css';
import axios from 'axios';

class BuyerCheckoutpointBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        // 還沒寫的 :

        // 判斷密碼是否正確
        if (this.props.buyerinfo[0].vgtpassword == this.inputPassword2) {
            var myorder = this.props.cartinfo;
            myorder.map((cartdata) => {
                // 依購物車選取的金額生成訂單
                var data = {
                    buyerid: cartdata.cartvgtid,
                    orderprice: cartdata.productprice * cartdata.cartnum,
                    productid: cartdata.productid
                }

                axios.post('http://localhost:3000/VGT/memberPage/buyer/tradecart/buyerinfo/createorder', data).then(
                    res => console.log(res),
                ).catch(
                    err => console.log(err)
                );

                // 清除購物車內資訊
                axios.post('http://localhost:3000/VGT/memberPage/buyer/tradecart/buyerinfo/clearcart', data).then(
                    res => console.log(res),
                ).catch(
                    err => console.log(err)
                );
            })

            // 減少會員的餘額
            var vgtpointdata = {
                newvgtpoint: this.props.buyerinfo[0].vgtpoint - (this.props.ordertotal - this.props.selecteddiscount),
                vgtid: this.props.buyerinfo[0].vgtid
            }

            axios.post('http://localhost:3000/VGT/memberPage/buyer/tradecart/buyerinfo/setvgtpoint', vgtpointdata).then(
                res => console.log(res),
            ).catch(
                err => console.log(err)
            );
        } else {
            window.alert('付款密碼錯誤')
        }

        window.location.replace('/VGT/memberPage/buyerInfo/tradeOrder')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mt-2 d-flex flex-row justify-content-between">
                <div className="col-4">
                    <input type="password" className="form-control" id="inputPassword2" name="inputPassword2" placeholder="Password"
                        onChange={(e) => this.inputPassword2 = e.target.value} />
                </div>
                <div className="pr-2">
                    <button type="submit" className="btn myBtn2">確認付款</button>
                </div>
            </form>

        );
    }
}

export default BuyerCheckoutpointBtn;