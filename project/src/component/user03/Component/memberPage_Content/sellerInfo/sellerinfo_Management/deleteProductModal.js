import React, { Component } from 'react';
import '../../../../css/modalStyle.css';
import axios from 'axios';

class DeleteProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    deleteProduct = () => {
        axios.delete(`http://localhost:3000/VgtMemberProduct/deleteProduct/${this.props.productid}`)
        .then(() => window.location.reload())
    }

    render() { 
       
        return ( 
            
            <div className="modal fade" id="deleteProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-body modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content bg-white">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">刪除商品</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>確定要刪除No.{this.props.productid}商品？</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-project" data-bs-dismiss="modal" onClick={this.deleteProduct}>確認</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DeleteProductModal;