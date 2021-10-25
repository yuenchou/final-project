import React, { Component } from 'react';
import '../../../../css/modalStyle.css';
import axios from 'axios';


class EditProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    editProduct = async () => {
        await axios.put("http://localhost:3000/VgtMemberProduct/editProduct", 
        JSON.stringify(this.props.currentItem),
        {headers: {'Content-Type': 'application/json'}})
        .then((response) => console.log(response));
        window.location.reload()
    }

    render() { 
        const edit = this.props.currentItem;        

        return ( 
            
            <div className="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-body modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content bg-white">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">商品資訊修改</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="editProduct">
                                <div class="row g-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <label for="editTitle" class="col-form-label">商品名稱：</label>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" id="editTitle" class="form-control" name="producttitle"
                                               value={edit.producttitle} onChange={this.props.editItem}
                                        />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <label for="editGameList" class="col-form-label">遊戲種類：</label>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" id="editGameList" class="form-control" name="gamelist"
                                               value={edit.gamelist} onChange={this.props.editItem}
                                        />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <label for="editServer" class="col-form-label">遊戲伺服：</label>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" id="editServer" class="form-control" name="gameserver"
                                               value={edit.gameserver} onChange={this.props.editItem}
                                        />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <label for="editClass" class="col-form-label">商品種類：</label>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" id="editClass" class="form-control" name="productclass"
                                               value={edit.productclass} onChange={this.props.editItem}
                                        />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <label for="editClass" class="col-form-label">商品資訊：</label>
                                    </div>
                                    <div class="col-9">
                                        <textarea className="form-control" 
                                                  aria-label="With textarea" 
                                                  name="productdesc" 
                                                  form="editProduct"
                                                  value={edit.productdesc}
                                                  onChange={this.props.editItem}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <label for="editPrice" class="col-form-label">商品價格：</label>
                                    </div>
                                    <div class="col-9">
                                        <input type="number" id="editPrice" class="form-control" name="productprice"
                                               value={edit.productprice} onChange={this.props.editItem}
                                        />
                                    </div>
                                </div>
                                <div class="row g-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <label for="editQuant" class="col-form-label">商品庫存：</label>
                                    </div>
                                    <div class="col-9">
                                        <input type="number" id="editQuant" class="form-control" name="productquant"
                                               value={edit.productquant} onChange={this.props.editItem}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-project" data-bs-dismiss="modal" onClick={this.editProduct}>確認修改</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default EditProductModal;