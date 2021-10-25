import React, { Component } from 'react';


class QuestionTradeCancel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
                <div className="container">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    我已經付款了，但是想取消交易，怎麼辦？
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ol>
                                        <li>要取消已付款但是尚未完成的交易，您可通過超時取消、自助取消、提交申訴由客服協助取消等方式處理；</li>
                                        <li>若要申訴取消，請至會員中心到客服中心到我要申訴，申訴類別請點選取消交易。申訴內容打上您要取消交易的原因及商品編號，客服中心收到申訴會盡快聯絡賣家確認交易狀況，確認完畢會取消交易並將您所支付的金額退回至您的8591會員帳戶；</li>
                                        <li>客服中心取消交易時會根據實際狀況判定責任方，與是誰提交申訴無關，造成交易取消的一方可能會有不好的評價。</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    我在收購區中刊登的商品可以取消交易嗎？
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <p>若您需要取消收購中「待交易」狀態的商品資訊， 請登入會員中心到我是買家到我收購的商品，勾選您要取消的商品，按取消刊登即可。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
 
export default QuestionTradeCancel;