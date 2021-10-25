import React, { Component } from 'react';
import EditProductModal from './editProductModal';
import DeleteProductModal from './deleteProductModal';
import axios from 'axios';
import {NavLink} from "react-router-dom";


// 這頁抓在架上的product
class TradeManage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productList: [],
            currentItem: {},
        }
    }

    componentDidMount () {
        axios.get(`http://localhost:3000/VgtMemberProduct/productList/${this.props.match.params.id}`)
        .then((response) => this.setState({productList: response.data}))
    }

    checkIndex = (id) => {
        var index = this.state.productList.findIndex(x => x.productid == id);
        this.setState({currentItem: this.state.productList[index]})
    }

    // 子層(edit & delete modal)使用
    editItem = (e) => {
        this.setState({
            currentItem:{
                ...this.state.currentItem,
                [e.target.name]: e.target.value
            }
        });
    }

    
    render() {
        
        return ( 
            
            <React.Fragment>
                {this.state.productList.length > 0 ? 
                <table class="table table-hover">
                <thead>
                        <tr>
                            <th scope="col">商品編號</th>
                            <th scope="col" style={{maxWidth: "100px"}}>商品名稱</th>
                            <th scope="col">遊戲種類</th>
                            <th scope="col">遊戲伺服</th>
                            <th scope="col">商品種類</th>
                            <th scope="col" className="text-center">商品價格</th>
                            <th scope="col" className="text-center">商品庫存</th>
                            <th scope="col" className="text-center">操作</th>
                        </tr>
                    </thead>
                    {this.state.productList.map(val => (
                    <tbody>                        
                        <tr>
                            
                                <th scope="row">No.{val.productid}</th>                            
                                <td style={{whiteSpace: "nowrap" ,textOverflow : "ellipsis", overflow: "hidden", maxWidth: "20vw"}}>
                                <NavLink className="nbr-link" target="_blank" to={`/VGT/ProductDetailPage/${val.productid}`}>
                                    {val.producttitle}
                                </NavLink>
                                </td>
                                <td>{val.gamelist}</td>
                                <td>{val.gameserver}</td>
                                <td>{val.productclass}</td>
                                <td className="text-center">{val.productprice}</td>
                                <td className="text-center">{val.productquant}</td>
                                <td>                                
                                    <button className="btn ms-3" data-bs-toggle="modal" data-bs-target="#editProductModal" onClick={() => this.checkIndex(val.productid)}>修改</button>      
                                    <button className="btn ms-3" data-bs-toggle="modal" data-bs-target="#deleteProductModal" onClick={() => this.checkIndex(val.productid)}>刪除</button>                                
                                </td>
                                                                                  
                        </tr>
                    </tbody>
                    ))}
                </table> 
                :
                <div>無上架產品</div>
            }
            <EditProductModal currentItem={this.state.currentItem} editItem={this.editItem}/>                          
            <DeleteProductModal productid={this.state.currentItem.productid}/>
            </React.Fragment>
         );
    }
}
 
export default TradeManage;