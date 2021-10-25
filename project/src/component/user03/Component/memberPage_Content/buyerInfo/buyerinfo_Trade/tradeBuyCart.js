import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import TradeBuyCartDetail from './tradeBuyCartDetail'
import BuyerCartBtn from '../../../../../user05/Component/buyer/buyerCart_btn';
import axios from 'axios';

class TradeBuyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vgtid: 2,
            productInfo: [],
            totalPrice: 0,
            totalNum: 0,
            allChecked: false
        }
    }

    componentDidMount() {
        // 回到購物車時先將使用者DB內的購物車操作歸零
        axios.get(`http://localhost:3000/Vgt/memberPage/buyerInfo/tradeCart/clearCart/${this.state.vgtid}`)
        .then(
            (response) => {
                console.log(response)
            }).catch(
                (err) => console.log(err)
            );

        axios.get(`http://localhost:3000/Vgt/memberPage/buyerInfo/tradeCart/${this.state.vgtid}`)
            .then(
                (response) => {
                    // 將資料庫讀出的資料都加上checked: false => 判斷未選取
                    response.data.forEach(element => {
                        element.checked = false;
                        element.cartnum = 1;
                    });
                    this.setState({ productInfo: response.data });
                }).catch(
                    (err) => console.log(err)
                );

    }

    // 增加購物車選中商品數量
    addNum = (i) => {
        let myproduct = [...this.state.productInfo];
        myproduct[i].cartnum++;
        myproduct[i].checked = true;
        this.setState({
            productInfo: myproduct
        });
        this.getTotal();
    }

    // 減少購物車選中商品數量
    mulNum = (i) => {
        let myproduct = [...this.state.productInfo];
        myproduct[i].cartnum--;
        myproduct[i].checked = true;
        this.setState({
            productInfo: myproduct
        });
        this.getTotal();
    }

    // 刪除購物車中商品
    delProduct = (i) => {
        let myproduct = [...this.state.productInfo];
        if (myproduct[i].checked) {
            myproduct[i].checked = !myproduct[i].checked;
        }
        myproduct.splice(i, 1);
        this.setState({
            productInfo: myproduct
        });
        this.getTotal();
    }

    // 單筆商品勾選
    singleCheck = (i) => {
        let myproduct = [...this.state.productInfo];
        if (myproduct[i].checked) {
            myproduct[i].checked = false;
        } else {
            myproduct[i].checked = true;
        };
        let allChecked = this.state.allChecked;
        let tag = myproduct.every((item) => { return item.checked });
        allChecked = tag;
        this.setState({
            productInfo: myproduct,
            allChecked: allChecked
        });
        this.getTotal()
    }

    // 全選商品
    allCheck = () => {
        let myproduct = [...this.state.productInfo];
        let allChecked = this.state.allChecked;
        if (allChecked) {
            allChecked = false
        } else {
            allChecked = true
        };
        myproduct.map((item) => { item.checked = allChecked });
        this.setState({
            productInfo: myproduct,
            allChecked: allChecked
        });
        this.getTotal()
    }

    getTotal = () => {
        let myproduct = [...this.state.productInfo]
        let total = 0;
        let num = 0;

        // 這裡怪怪的
        let newlist = myproduct.filter(product => { return product.checked != false });

        newlist.map((product) => {
            total += product.productprice * product.cartnum
            num += product.cartnum
        })
        this.setState({
            totalPrice: total,
            totalNum: num
        })
    }

    render() {
        return (
            <BrowserRouter>
                <TradeBuyCartDetail
                    productInfo={this.state.productInfo}
                    addNum={this.addNum}
                    mulNum={this.mulNum}
                    delProduct={this.delProduct}
                    singleCheck={this.singleCheck}
                    allCheck={this.allCheck}
                    allChecked={this.state.allChecked}
                />
                <BuyerCartBtn
                    productinfo={this.state.productInfo}
                    totalprice={this.state.totalPrice}
                    totalnum={this.state.totalNum}
                />
            </BrowserRouter>
        );
    }
}

export default TradeBuyCart;