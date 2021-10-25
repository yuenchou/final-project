import React, { useState } from 'react';
// import {NavLink} from "react-router-dom";
import axios from 'axios';

function SearchBar () {

    const [choseGame, setChoseGame] = useState("");
    const [choseServer, setChoseServer] = useState("");
    const [choseType, setChoseType] = useState("");
    const [keyWord, setKeyWord] = useState("");

    const searchClick = () => {
       
        axios.post('http://localhost:3000/VgtSearch/condition'
        ,{
            gamelist: choseGame,
            gameserver: choseServer,
            productclass: choseType,
            keyWord: keyWord
        }).then((response) => {
            console.log(response);
            // window.location.reload();
            window.location.href = "/VGT/ProductSearchPage";
            setChoseGame("");
            setChoseServer("");
            setChoseType("");
            setKeyWord("");
        }
        )
    }

    return (
        <form className="row mb-3 gx-3 gy-2 justify-content-center" onSubmit={searchClick}>
            <div className="col-sm-3">
                <label className="visually-hidden" for="choseGame">choseGame</label>
                <select className="form-select" 
                        name="choseGame"
                        value={choseGame}
                        onChange={e => setChoseGame(e.target.value)}
                        required
                >
                    <option value="">選擇遊戲</option>
                    <option value="楓之谷">楓之谷</option>
                    <option value="英雄聯盟">英雄聯盟LOL</option>
                    <option value="天堂M">天堂M</option>
                </select>
            </div>
            <div className="col-sm-3">
                <label className="visually-hidden" for="choseSever">choseSever</label>
                <select className="form-select" 
                        name="choseServer"
                        value={choseServer}
                        onChange={(e) => {setChoseServer(e.target.value)}}
                >
                    <option value="">全伺服器</option>
                    <option value="艾麗亞">艾麗亞</option>
                    <option value="普力特">普力特</option>
                    <option value="優伊娜">優伊娜</option>
                </select>
            </div>
            <div className="col-sm-2">
                <label className="visually-hidden" for="choseType">choseType</label>
                <select className="form-select" 
                        id="choseType"
                        name="choseType"
                        value={choseType}
                        onChange={(e) => {setChoseType(e.target.value)}}
                >
                    <option value="">物品種類</option>
                    <option value="遊戲幣">遊戲幣</option>
                    <option value="道具">道具</option>
                    <option value="帳號 ">帳號</option>
                    <option value="代練">代練</option>

                </select>
            </div>
            <div className="col-sm-2">
                <label className="visually-hidden" for="keyWord">Name</label>
                <input type="text" 
                       className="form-control" 
                       id="keyWord" 
                       placeholder="標題關鍵字搜尋"
                       name="keyWord"
                       value={keyWord}
                       onChange={(e) => {setKeyWord(e.target.value)}}
                />
            </div>
            <div className="col-auto">
            {/* <NavLink to="/VGT/ProductSearchPage"> */}
                <button type="submit" className="btn btn-project">搜尋</button>
            {/* </NavLink> */}
            </div>
        </form>
    )
}

export default SearchBar

