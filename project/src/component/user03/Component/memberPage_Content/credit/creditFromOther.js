import React, { Component } from 'react';
import axios from "axios";
// import date from 'date-and-time';
// const id = this.props.match.params.id;
class CreditFromOther extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buyercmmt:[]
                // "buyerid":"",
                // "orderid":"",
                // "buyereval":"",
                // "buyercmt":"",
                // "cmmtdate":""                            
        }
    }

    componentDidMount () {
        axios.get('http://localhost:3000/Vgt/vgtserver/order/buyercmmt')
             .then((res) => {                
                this.setState({buyercmmt:res.data});
             })
             .catch((err) => {
                 console.log(err);
             })
    }
    render() { 
        return ( 
            <React.Fragment>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">會員ID(買家)</th>
                            <th scope="col">訂單編號</th>
                            <th scope="col">評價等級</th>
                            <th scope="col">評價內容</th>
                            <th scope="col">評價日期</th>
                        </tr>
                    </thead>
                    {this.state.buyercmmt.map((val) => 
                    <tbody>
                        <tr>
                            <th scope="row">{val.buyerid}</th>
                            <td>{val.orderid}</td>
                            <td>{val.buyereval}</td>
                            <td>{val.buyercmt}</td>
                            <td>{val.cmmtdate}</td>
                        </tr>                       
                    </tbody>
                    )}
                    
                </table>               
            </React.Fragment>
         );
    }
}
 
export default CreditFromOther;