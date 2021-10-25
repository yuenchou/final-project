import React, { Component } from 'react';
import axios from 'axios';
import '../css/myStyle06.css';
import ImageGroup from './pDComponent/ImageGroup';
import ProductItem from './pDComponent/ProductItem';
import Seller from './pDComponent/Seller';
import ProductDesc from './pDComponent/ProductDesc';
import MesTitle from './pDComponent/MesTitle';




class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vgtid: 0,
            productItem:[
                {"productid":"", "vgtid":"", "vgtname":"", "gamelist":"", "gameserver":"", "producttitle":"", "productclass":"", "productdesc":"", "productprice":"", "productquant":"", "productdate":"", "productimg":"", "producttoorder":""}
            ],
            cmmtList: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        
        // Simple GET request using axios
        axios.get(`http://localhost:3000/VgtDetail/detail/${id}`)
            .then((response) => {
                this.setState({productItem: response.data}); 
                console.log(this.state.productItem);
            });

        axios.get(`http://localhost:3000/VgtProductCmmt/productcmmt/${id}`, ).then(
            (response) => {this.setState({cmmtList: response.data});console.log(response)})
        
        
        axios.get('http://localhost:3000/VgtLogin/login').then(
            (response) => {this.setState({vgtid: response.data[0].vgtid})}
        );
        
    }

    

    

    render() { 
        var productItem = this.state.productItem[0];
        var imgList = productItem.productimg.split(',');
        var temp = [];

        for (let i of imgList) {
            i && temp.push(i);
        };
        imgList = temp;

        return (  
                
            <div className="container">

                <div className="d-flex justify-content-center">
                    
                    <ImageGroup imgList={imgList}/>
                        
                    <div className="col-1"></div> {/* 中間空一格 */}

                    <ProductItem productItem={productItem}/>
                </div>
                
                
                <div className="d-flex p-4"></div>
        
                <div className="d-flex justify-content-center">
                    <Seller productItem={productItem}/>
                </div>

                <div className="d-flex p-2"></div>
                
                <div className="d-flex justify-content-center">
                    <ProductDesc productItem={productItem} cmmtList={this.state.cmmtList}/>
                </div>

                <div className="d-flex p-2"></div>

                <div className="d-flex justify-content-center">
                    <MesTitle cmmtList={this.state.cmmtList} 
                          vgtid={this.state.vgtid}
                          seller={productItem.vgtid}
                />
                </div>
                
            </div>
        
        );
    }
}
 
export default ProductDetail;

