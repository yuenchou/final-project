import React, { Component } from 'react';
import '../../css/myStyle05.css';

class BuyerReceive extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                    <div className="title col text-center border-right border-secondary bg-warning">
                        交易流程三
                    </div>
                    <div className="title col text-center">
                        交易流程四
                    </div>
                </div>

                <div className="container mt-5 border border-dark w-75" style={{ height: '325px' }}>
                    <h2 className="title mt-4 overflow-ellipsis text-center font-weight-bold">
                        交易進行中
                    </h2>
                    <div>
                        {this.props.productinfo.map((product, index) => (
                            <div className="row justify-content-center mt-5">
                                <div className="col-5 bg-light">
                                    <div key={product.producttitle} className="p-2 myContent overflow-ellipsis text-truncate">商品標題: {product.producttitle}</div>
                                    <div key={product.vgtid} className="p-2 myContent">賣家編號: ID. {(product.vgtid).toString().padStart(7, '0')}</div>
                                    <div key={product.gamelist} className="p-2 myContent">遊戲名稱: {product.gamelist}</div>
                                    <div key={product.productclass} className="p-2 myContent">商品分類: {product.productclass}</div>
                                </div>

                                <div className="col-5 bg-light ml-5">
                                    <div className="p-2 myContent">買家編號: ID. {(product.buyerid).toString().padStart(7, '0')}</div>
                                    <div className="p-2 myContent">伺服器: {product.gameserver}</div>
                                    <div className="p-2 myContent">角色名稱: {product.charactername}</div>
                                    <div className="p-2 myContent">角色特徵: {product.characterdesc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        );
    }
}

export default BuyerReceive;