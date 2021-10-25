import React, { Component } from "react";



class ProductModel extends Component{
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" style="background-color: black;" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div style="display: flex; justify-content: space-evenly;">
                    <div className="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        </div>
                    </div>

                    <div className="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        </div>
                    </div>

                    <div className="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div style="display: flex; justify-content: space-evenly;">
                    <div className="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." /> 
                        <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        </div>
                    </div>

                    <div className="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        </div>
                    </div>

                    <div className="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div style="display: flex; justify-content: space-evenly;">
                    <div className="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        </div>
                    </div>

                    <div className="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        </div>
                    </div>

                    <div className="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
  </div>
        ) 
        
    }
    
}

export default ProductModel;