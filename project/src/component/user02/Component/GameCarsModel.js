import React, { Component } from "react";
import card1 from "../../user02/img/card1.jpg";
import card2 from "../img/card2.jpg";
import card3 from "../img/card3.jpg";
import card4 from "../img/card4.jpg";
import card5 from "../img/card5.png";
import card6 from "../img/card6.jpg";
import card7 from "../img/card7.jpg";
import card8 from "../img/card8.jpg";

class GameCarsModel extends Component{
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() {
        return (
            <div className="d-flex flex-column container  mt-5">

                    <div className="row justify-content-between">
                        <div className="card" style={{ width: '14rem'}}>
                            <img src={card1} className="card-img-top" alt="英雄聯盟"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">英雄聯盟</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: '14rem'}}>
                            <img src={card2} className="card-img-top" alt="楓之谷"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">楓之谷</h5>
                            </div>
                        </div>
                        <div className="card" style={{  width: '14rem'}}>
                            <img src={card3} className="card-img-top" alt="RO仙境傳說"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">RO仙境傳說</h5>
                            </div>
                        </div>
                        <div className="card" style={{  width: '14rem'}}>
                            <img src={card4} className="card-img-top" alt="魔獸世界"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">魔獸世界</h5>
                            </div>
                        </div>
                        
                    </div>
                    <br/>
                    <div className="row justify-content-between">
                        <div className="card" style={{ width: '14rem'}}>
                            <img src={card5} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">天堂M</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: '14rem'}}>
                            <img src={card6} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">希望戀曲</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: '14rem'}}>
                            <img src={card7} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">AION永恆紀元</h5>
                            </div>
                        </div>
                        <div className="card " style={{  width: '14rem'}}>
                            <img src={card8} className="card-img-top" alt="俠盜獵車手5"/>
                            <div className="card-body ">
                                <h5 className="card-title text-center">俠盜獵車手5</h5>
                            </div>
                        </div>
                    </div>                                     
                </div>
        ) 
        
    }
    
}

export default GameCarsModel;