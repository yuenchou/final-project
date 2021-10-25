import React, { Component } from 'react';
import BuyerFinishTrade_state4 from './buyerFinishTrade_state4';
import BuyerFinishTrade_state5 from './buyerFinishTrade_state5';
import '../../css/myStyle05.css';

class BuyerFinishTrade extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
                <div className="container mt-5 d-flex flex-row w-75" style={{ height: "30px", lineHeight: "30px" }}>
                    <div className="title col text-center border-right border-secondary">
                        交易流程一
                    </div>
                    <div className="title col text-center border-right border-secondary">
                        交易流程二
                    </div>
                    <div className="title col text-center border-right border-secondary">
                        交易流程三
                    </div>
                    <div className="title col text-center bg-warning">
                        交易流程四
                    </div>
                </div>

                <div className="container mt-5 border border-dark w-75" style={{ height: 'auto' }}>
                    <h2 className="title mt-4 overflow-ellipsis text-center font-weight-bold">
                        完成交易
                    </h2>
                    {this.props.productinfo.map((product, index) => (
                        <div key={index+1} className="row justify-content-center mt-5">
                            <div key={index+2} className="col-5 bg-light">
                                <div key={product.producttitle} className="p-2 myContent overflow-ellipsis text-truncate">商品標題: {product.producttitle}</div>
                                <div key={product.vgtid} className="p-2 myContent">賣家編號: No. {(product.vgtid).toString().padStart(7, '0')}</div>
                                <div key={product.gamelist} className="p-2 myContent">遊戲名稱: {product.gamelist}</div>
                                <div key={product.productclass} className="p-2 myContent">商品分類: {product.productclass}</div>
                            </div>
                            <div key={index+3} className="col-5 bg-light ml-5">
                                <div key={product.buyerid} className="p-2 myContent">買家編號: No. {(product.buyerid).toString().padStart(7, '0')}</div>
                                <div key={product.gamelist} className="p-2 myContent">伺服器: {product.gamelist}</div>
                                <div key={product.charactername + 1} className="p-2 myContent">角色名稱: {product.charactername}</div>
                                <div key={product.charactername + 2} className="p-2 myContent">角色特徵: {product.characterdesc}</div>
                            </div>          
                        {/* 根據訂單的state給按鈕OR回到會員中心連結                    */}
                        {this.props.productinfo[0].orderstate == 4 ? <BuyerFinishTrade_state4 orderid={this.props.orderid} />: <BuyerFinishTrade_state5 />}                                                   
                       </div>
                    ))}
                </div>
            </div>
        );
    };
};

export default BuyerFinishTrade;