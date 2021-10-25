import React, { Component } from 'react';

class AppealRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form className="mb-2">
                <div className="form-group">
                    <label for="exampleFormControlInput1">申訴主題：</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="請輸入問題"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">申訴類別：</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>取消交易</option>
                        <option>交易問題</option>
                        <option>會員問題</option>
                        <option>現金問題</option>
                        <option>檢舉不法</option>
                        <option>發票</option>
                        <option>其他</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">申訴內容：</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" cols="70" rows="10" placeholder="請選擇正確的申訴類別，以便快速為您解決問題&#13;申訴服務時間：09:00~21:00&#13;春節及系統維護時間，服務時間請參見公告" maxlength="300"></textarea>
                </div>

                <div className="form-group col-6 my-3">
                    <label for="exampleFormControlFile1 ">
                        上傳圖檔：每次可上傳2張圖檔。點擊上傳的圖檔可進行替換。
                    </label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <button type="submit" className="btn btn-project">送出</button>
            </form>
         );
    }
}
 
export default AppealRequest;