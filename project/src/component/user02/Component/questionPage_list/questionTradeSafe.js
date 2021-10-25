import React, { Component } from 'react';


class QuestionTradeSafe extends Component {
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
                                    如果我發現賣家重復出售帳號，我該怎麼辦？
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">完成交易後若發現賣家重復出售帳號，請立即登入會員中心到客服中心到我要申訴，提交一筆申訴，申訴內容填寫您的商品編號並詳細說明申訴原因，客服中心收到申訴後將會儘快為您確認，協助您處理問題。
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    遊戲帳號交易的時候應該注意什麼事項？
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ol>
                                        <li>賣家刊登帳號類商品資訊時，必須詳細說明帳號中角色的相關資料及裝備狀況，讓買家充分了解帳號基本情況（PS：禁止買賣不可修改密碼的遊戲帳號）。</li>
                                        <li>買家付款後，雙方就可以看到對方的聯絡資料，雙方可協商用另一角色上線查看賣家帳號基本情況與刊登商品是否符合，買家是否喜歡。如買家查看確認滿意後即可進行交易。</li>
                                        <li>移交帳密與其他資訊請使用交易留言板移交，將是最有力的證據。</li>
                                        <li>買家請一定要向賣家索要帳號切結書，確認後在做領收動作。請勿沒有拿到切結書，沒有確認好的情況下，就做領收動作。
                                        </li>
                                        <li>如交易出現狀況請盡快使用線上申訴與客服中心聯絡，客服中心將盡快聯絡處理。</li>
                                        <li>如果賣方帳號之身份資料非正確資料，請到相關官網先行修改，以便於雙方交易更加順利，減少不必要的困擾。</li>
                                        <li>線上遊戲帳號交易時，要看清楚在本站申請出售帳號的賣家姓名是否和帳號所有者的名字一致，致此大部分線上遊戲的物品所有者是不能變更的。因此，遊戲帳號姓名與賣方的名字不同時，請注意不要進行交易。</li>
                                        <li>目前只有部分官網提供帳號身分證更正之服務，請玩家在交易前了解自己所玩遊戲的官網是否有提供此類服務。</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    請問我在轉讓帳號時，需要準備些什麼資料？
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">由于部分玩家移交帳號時，未能提供清楚、完整帳號切結書資料與證件，導致日後衍生無法預期的交易糾紛與法律問題。故提醒賣家在移交帳號後，請務必準備完整切結書資料，並附上更改遊戲資料的所須證件，以確保帳號所有權已完整轉移，避免後續不必要之交易糾紛。
                                    二手帳號與身分證產生器注冊之帳號，無法提供更改遊戲資料的證件時，請在刊登出售時詳細說明，帳號轉移切結書請附上賣家本人的證件。
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
        );
    }
}
 
export default QuestionTradeSafe;