import React, { Component } from 'react';


// 這頁抓已完成的order資料
class TradeFinance extends Component {
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
                            <th scope="col" >交易金額</th>                            
                        </tr>
                    </thead>
                    <tbody>                        
                        <tr>                           
                            <th scope="row">No.4565135</th>                            
                            <td>楓之谷</td>
                            <td>雪吉拉</td>
                            <td>道具</td>
                            <td className="">...</td>                                                      
                        </tr>
                        <tr>
                            <th scope="row" colspan="5" className="text-center">
                                近5筆交易總收入：
                                <span>X元</span>
                            </th>
                            {/* <td colspan="5" className="text-center"></td> */}
                        </tr>
                    </tbody>
                </table>                
            </React.Fragment>
         );
    }
}
 
export default TradeFinance;