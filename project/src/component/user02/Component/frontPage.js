import React, { Component } from 'react';
import '../css/style.css';
import { NavLink } from 'react-router-dom';
import VgtNewsModel from '../Component/VgtNewsModel';
import GameCarsModel from './GameCarsModel';
import ProductModel from './ProductModel';
import SearchBar from '../../user06/Component/pSComponent/SearchBar';


    class Frontpage extends Component {
        constructor(props) {
        super(props);
        this.state = {  }
    }      
    
    render() { 
        // const width = {
        //     width:'14rem'
        // }
        return ( 
            <div>
                <div>
                    <SearchBar/>
                </div>
                <section className=" text-center mt-5">
                    <h4>創新、便利、安全的虛擬交易，就在VGT！</h4>
                </section>
                <div style={{ width: '100%', height: '50px'}}></div>

                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-07/0ccd6760-9c77-11e9-8f7b-5d95d434c699" className="d-block mx-auto" alt="..."/>
                        </div>
                    </div>
                </div>
                <VgtNewsModel />
                <GameCarsModel />
                {/* <ProductModel /> */}
                <br/>
                <br/>
                            
            </div>
            
        );
    }        
}
 
export default Frontpage;