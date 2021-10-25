import React, { Component } from 'react';
import '../../css/myStyle05.css';

class DealerCancelTrade extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container mt-5 border border-dark" style={{height: '400px'}}>
                <h3 className="title mt-4 overflow-ellipsis text-center font-weight-bold">
                    已取消交易
                </h3>
                <div className="row justify-content-center mt-5">
                    <div className="col-5 bg-light">
                        <div className="p-2 myContent overflow-ellipsis text-truncate">商品標題: 陰陽 法師 退谷 航海 %智</div>
                        <div className="p-2 myContent">賣家編號: ID 1445252</div>
                        <div className="p-2 myContent">遊戲名稱: 楓之谷</div>
                        <div className="p-2 myContent">商品分類: 帳號</div>
                    </div>
                    
                    <div className="col-5 bg-light ml-5">
                        <div className="p-2 myContent">買家編號: ID 1234567</div>
                        <div className="p-2 myContent">伺服器: 普力特</div>
                        <div className="p-2 myContent">角色名稱: 名稱打在這</div>
                        <div className="p-2 myContent">角色特徵: 男女職業等級之類的</div>
                    </div>
                </div>
                <br/>
                <div className="d-flex mt-5 justify-content-center">
                    回到 <a href="" className="text-decoration-none myLink">會員中心</a>
                </div>
            </div>
        );
    }
}
 
export default DealerCancelTrade;