import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';



class TradeSellCancel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <table class="table table-hover">
                <thead>
                        <tr>
                            <th scope="col">商品編號</th>
                            <th scope="col">遊戲名稱</th>
                            <th scope="col">遊戲伺服器</th>
                            <th scope="col">商品種類</th>
                            <th scope="col" className="text-center">操作</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        <tr>                           
                            <th scope="row">No.4565135</th>                            
                            <td>楓之谷</td>
                            <td>雪吉拉</td>
                            <td>道具</td>
                            <td className="d-flex justify-content-evenly">
                                <NavLink to="/VGT/memberPage/sellerInfo/CancelTrade" className="btn" target="_parent">查看商品詳情</NavLink>
                                <NavLink to="/VGT/MemberPage/customerService" className="btn">我要申訴</NavLink>
                            </td>                                                      
                        </tr>
                    </tbody>
                </table>               
            </React.Fragment>
         );
    }
}
 
export default TradeSellCancel;