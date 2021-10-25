import React, { Component } from 'react';
import axios from 'axios';
import '../css/myStyle06.css';
import ProductItem from './pDComponent/ProductItem';
import Seller from './pDComponent/Seller';
import ProductDesc from './pDComponent/ProductDesc';
import { Image } from 'cloudinary-react';




class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
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
                    <div className="column">
                        <Image id="featured" className="thumbnail2" cloudName="domzm9awh" publicId={imgList[0]}></Image>
                        <div id="slider" className="d-flex mt-4">
                            {imgList.map(val => (
                                <Image className="thumbnail4 me-3 active" src={val} alt="..." onClick={handleClick}></Image>
                            ))}
                    </div>
        
        </div>
                    
                <div className="col-1"></div>
                    <ProductItem productItem={productItem}/>
                </div>
                
                <div className="d-flex p-4"></div>
        
                <div className="d-flex justify-content-center">
                    <Seller productItem={productItem}/>
                </div>

                <div className="d-flex p-4"></div>
                
                <div className="d-flex justify-content-center">
                    <ProductDesc productItem={productItem} cmmtList={this.state.cmmtList}/>
                </div>
                
            </div>
        
        );
    }
}
 
export default ProductDetail;

const handleClick = () => {
    var thumbnails = document.getElementsByClassName('thumbnail4')

    var activeImages = document.getElementsByClassName('active')

    for (var i=0; i < thumbnails.length; i++){

        thumbnails[i].addEventListener('click', function(){
            
            if (activeImages.length > 0){
                activeImages[0].classList.remove('active')
            }
            
    
            this.classList.add('active')
            document.getElementById('featured').src = this.src
        })
    }

}