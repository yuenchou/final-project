import React, { Component } from 'react';
import '../../css/myStyle05.css';
import axios from 'axios';

class BuyerCheckoutStorepoint extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick() {
        window.location.replace('/')
    }

    render() {
        return (
            <div className="mt-2 d-flex flex-row justify-content-between">
                <div className="col-4">
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                </div>
                <button className="btn" onClick={this.handleClick}>
                    前往儲值
                </button>
            </div>
        );
    }
}

export default BuyerCheckoutStorepoint;