import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import '../../css/myStyle05.css';
import axios from 'axios';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // 改BUTTON ONCLICK接AXIOS.POST到後台 UPDATE TABLE `order` 的角色名稱與資料
    // if 判斷是否有角色資料 若無 => input form / 若有 => 顯示資料

    handleSubmit = (e) => {
        e.preventDefault();
        var data = {
            charactername: this.charactername,
            characterdesc: this.characterdesc,
            orderid: this.props.orderid
        };

        axios.post('http://localhost:3000/Vgt/memberPage/buyer/tradeprocess/updatecharacter', data).then(
            res => (
                // 這裡要加切URL至state3畫面
                window.location.replace(`http://localhost:8000/Vgt/memberPage/buyer/tradereceive/${this.props.orderid}`)
            ).catch(
                err => console.log(err)
            )
        )
    }

    render() {
        return (
            <div className="container mt-5 border border-dark w-75" style={{ height: '275px' }}>
                <h2 className="title mt-3 p-2 overflow-ellipsis text-center">
                    角色資料
                </h2>
                <div className="mx-5 bg-light">
                    <div className="w-100">
                        {this.props.productinfo.map((product) => (
                            <div key={product.gamelist} className="mt-3 p-2 myContent">伺服器: &nbsp;&nbsp;{product.gameserver}</div>
                        ))}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="d-flex flex-row">
                            <div className="px-2 myContent">
                                角色名稱: &nbsp;
                                <input type="text" name="charactername" className="p-2 mt-2 border"
                                    onChange={(e) => this.charactername = e.target.value} />
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="px-2 myContent">
                                角色特徵: &nbsp;
                                <input type="text" name="characterdesc" className="p-2 mt-2 border"
                                    onChange={(e) => this.characterdesc = e.target.value} />
                            </div>
                            <div>
                                <button type="submit" className="mt-1 mx-3 btn myBtn2">
                                    確認角色資料
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Character;