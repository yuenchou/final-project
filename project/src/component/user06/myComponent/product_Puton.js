import React, { Component } from 'react';
import '../css/myStyle06.css';
import axios from 'axios';
import { TiDelete } from "react-icons/ti"
import { BsPlusCircleFill } from "react-icons/bs"



class ProductPuton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            vgtid: "",
            producttitle: "",
            gamelist: "",
            gameserver: "",
            productclass: "",
            productdesc: "",
            productprice: 1,
            productquant: 1,
            productimg: [],
            upload1: {selectedImage: "",fileIcon: <BsPlusCircleFill/>},
            upload2: {selectedImage: "",fileIcon: <BsPlusCircleFill/>},
            upload3: {selectedImage: "",fileIcon: <BsPlusCircleFill/>},
            upload4: {selectedImage: "",fileIcon: <BsPlusCircleFill/>},
            loading: true
          
        };
    };

    componentDidMount () {
        axios.get("http://localhost:3000/VgtLogin/login").then((response) => {
            this.setState({vgtid: response.data[0].vgtid});
            
        });
    };


    imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            this.setState({
                [e.target.name]: {selectedImage: e.target.files[0], fileIcon: ""}
            });
            
        
        };
    };

    removeSelectedImage = (e) => {
        this.setState({
            [e.target.name]: {selectedImage: "",fileIcon: <BsPlusCircleFill/>}
        });
    };


    
    
    newProduct = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    
    submitNewProduct = async (e) => {
        e.preventDefault();
        
        this.setState({loading: false});
        const upload = [this.state.upload1.selectedImage, 
                        this.state.upload2.selectedImage,
                        this.state.upload3.selectedImage, 
                        this.state.upload4.selectedImage];

        const API_ENDPOINT = 'http://api.cloudinary.com/v1_1/domzm9awh/image/upload';
        const fileData = new FormData();   
       
        for (var i=0; i<upload.length; i++) {
            fileData.append('file', upload[i]);
            fileData.append('upload_preset', 'vgtProduct'); // upload preset
            fileData.append('tags', 'vgt'); // optional
            var imgData = this.state.productimg
            
            await fetch(API_ENDPOINT, {
                method: 'post',
                body: fileData
            }).then(response => response.json())
            .then(data => {imgData.push(data.url);
                                   this.setState({productimg: imgData})})
            .catch(err => console.error('Error:', err));
        }
        
        axios.post('http://localhost:3000/VgtNewProduct/newProduct', {
            vgtid: this.state.vgtid,
            producttitle: this.state.producttitle,
            gamelist: this.state.gamelist,
            gameserver: this.state.gameserver,
            productclass: this.state.productclass,
            productdesc: this.state.productdesc,
            productprice: this.state.productprice,
            productquant: this.state.productquant,
            productimg: this.state.productimg
        })
        .then((response) => {
            console.log(response);
            this.setState({loading: true})
            window.location.href = 'http://localhost:8000/VGT/memberPage/sellerInfo/tradeTransfer'
        })
    };

    render() { 

        const upload = [{fileIcon: this.state.upload1.fileIcon ,selectedImage : this.state.upload1.selectedImage, id: "img1", name: "upload1"},
                        {fileIcon: this.state.upload2.fileIcon ,selectedImage : this.state.upload2.selectedImage, id: "img2", name: "upload2"},
                        {fileIcon: this.state.upload3.fileIcon ,selectedImage : this.state.upload3.selectedImage, id: "img3", name: "upload3"}, 
                        {fileIcon: this.state.upload4.fileIcon ,selectedImage : this.state.upload4.selectedImage, id: "img4", name: "upload4"}];

        return ( 
            <div className="container">
                <form id="newProductForm" name="newProductForm" method="POST" action="http://localhost:3000/VgtNewProduct/newProduct" onSubmit={this.submitNewProduct}>
                    <div className="d-flex justify-content-center">
                        <div className="col-8 pt-3">
                            <p className="h2">新增商品</p>
                            <div className="card mt-4">
                                <div className="card-header primebg" style={{ backgroundColor:'#265663' }}>
                                商品資訊
                                </div>
                                <div className="card-body">
                                    <div className="input-group mb-5">
                                        <span className="input-group-text" id="basic-addon1">商品名稱</span>
                                        <input type="text" 
                                               className="form-control" 
                                               placeholder="請輸入名稱" 
                                               name="producttitle"
                                               aria-label="producttitle" 
                                               aria-describedby="basic-addon1"
                                               onChange={this.newProduct}
                                               required
                                        />
                                    </div>
                                    <div className="input-group mb-5" >
                                        <span className="input-group-text titleHeight me-4">商品圖片</span>
                                        {upload.map((val) => (
                                            <div style={styles.container}>
                                                <label className="input-group-text upload_cover"  for={val.id}>
                                                    {val.fileIcon}
                                                <input
                                                id={val.id}
                                                accept="image/*"
                                                type="file"
                                                className="d-none"
                                                name={val.name}
                                                onChange={this.imageChange}
                                                />
                                                {(val.selectedImage) && (
                                                <div style={styles.preview}>
                                                    <img
                                                    src={URL.createObjectURL(val.selectedImage)}
                                                    style={styles.image}
                                                    alt="Thumb"
                                                    />
                                                    <button type="button" name={val.name} onClick={this.removeSelectedImage} style={styles.delete}>
                                                        <TiDelete/>
                                                    </button>
                                                </div>
                                                )}
                                                </label>
                                            </div>

                                        ))}                                        
                                    </div>
                                    <div className="input-group mb-5">
                                        <label className="input-group-text" for="inputGroupSelect01">商品遊戲</label>
                                        <select className="form-select" 
                                                id="inputGroupSelect01" 
                                                name="gamelist" 
                                                value={this.state.gamelist}
                                                onChange={this.newProduct}
                                                placeholder="伺  服  器" 
                                                required
                                        >
                                        <option value="">請選擇</option>
                                        <option value="楓之谷">楓之谷</option>
                                        <option value="英雄聯盟">英雄聯盟</option>
                                        <option value="APEX 英雄">APEX 英雄</option>
                                        </select>
                                    </div>
                                    <div className="input-group mb-5">
                                        <label className="input-group-text" for="inputGroupSelect02">伺&nbsp;&nbsp;服&nbsp;&nbsp;器</label>
                                        <select className="form-select" 
                                                id="inputGroupSelect02" 
                                                name="gameserver"
                                                value={this.state.gameserver} 
                                                onChange={this.newProduct}
                                                required
                                        >
                                        <option value="">請選擇</option>
                                        <option value="艾麗亞">艾麗亞</option>
                                        <option value="普力特">普力特</option>
                                        <option value="優伊娜">優伊娜</option>
                                        </select>
                                    </div>
                                    <div className="input-group mb-5">
                                        <label className="input-group-text" for="inputGroupSelect03">商品種類</label>
                                        <select className="form-select"
                                                id="inputGroupSelect03" 
                                                name="productclass" 
                                                value={this.state.productclass}
                                                onChange={this.newProduct}
                                                required
                                        >
                                        <option value="">請選擇</option>
                                        <option value="道具">道具</option>
                                        <option value="帳號">帳號</option>
                                        <option value="點數卡">點數卡</option>
                                        </select>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text" id="basic-addon4">商品資訊</span>   
                                        <textarea className="form-control" 
                                                  aria-label="With textarea" 
                                                  name="productdesc" 
                                                  form="newProductForm"
                                                  onChange={this.newProduct}
                                                  value={this.state.productdesc}
                                                  required
                                        >
                                        </textarea>
                                    </div>
                                </div>
                            </div>
            
                        </div>
            
                    </div>
            
                    <div className="d-flex p-3"></div>
            
                    <div className="d-flex justify-content-center">
                        <div className="col-8">
                            
                            <div className="card mt-4">
                                <div className="card-header primebg" style={{ backgroundColor:'#265663'}}>
                                銷售資訊
                                </div>
                                <div className="card-body">
                                    <div className="input-group mb-5">
                                        <span className="input-group-text" id="basic-addon2">商品價格</span>
                                        <input type="number" 
                                               className="form-control" 
                                               placeholder="請輸入價格" 
                                               name="productprice" 
                                               aria-label="productprice" 
                                               aria-describedby="basic-addon2"
                                               onChange={this.newProduct}
                                               required
                                        />
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text" id="basic-addon3">商品庫存</span>
                                        <input type="number" 
                                               className="form-control" 
                                               placeholder="請輸入庫存" 
                                               name="productquant" 
                                               aria-label="productquant" 
                                               aria-describedby="basic-addon3"
                                               onChange={this.newProduct}
                                               required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="d-flex mt-5 mb-5 justify-content-center">
                        {this.state.loading ? 
                            <button type="submit" className="btn primebg btnhover">確認上架</button>
                            :
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        }
                    </div>                
                </form>
                
            </div>
        );
    }
}
 
export default ProductPuton;

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "30px",
    },
    preview: {
        display: "flex",
        flexDirection: "column",
    },
    image: { 
        maxWidth: "100px", 
        maxHeight: "100px" 
    },
    delete: {
        width: "30px",
        height: "30px",
        cursor: "pointer",
        color: "white",
        marginTop: "5px",
        marginLeft: "65px",
        paddingBottom: "4px",
        borderRadius: "50%"
    }
};