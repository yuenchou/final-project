import React, { Component } from 'react';
import '../modal/modalStyle.css';

{/* <a  data-bs-toggle="modal" data-bs-target="#exampleModal">
    控制modal
</a> */}

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-body modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content bg-white">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">交易評價</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>對會員的評價：</p>
                            <p>對會員的評語：</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 ms-auto">2021-09-21</div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-project" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Modal;