import React, { Component } from 'react';
import '../css/register.css';
import '../js/register';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div class="container">
                <div class="form-group titleDiv">
                    <h3 class="formTitle">填寫註冊資料</h3>
                </div>
                <div class="container row">
                    <div class="form col-md-6">
                        <form class="form-horizontal " id="registerForm">
                            <div class="form-group mt-5">
                                <input class="form-control registerUserName required" type="text" placeholder="請輸入帳號" name="userName"
                                    autofocus="autofocus" />
                                <span class="text-myset">長度為6-12字元，註冊成功後不能修改。</span><br />
                            </div>
                            <div class="form-group"><br />
                                <input class="form-control registerPassword required" type="password" placeholder="請輸入密碼"
                                    id="registerPassword" name="password" />
                                <span class="text-myset">長度為6-20字元，字母請區分大小寫。</span>
                            </div>
                            <div class="form-group"><br />
                                <input class="form-control registerrPassword required" type="password" placeholder="再次輸入密碼"
                                    name="rpassword" /><br /><br />
                            </div>
                            <div class="form-group">
                                <input class="form-control registerFullName required" type="text"
                                    placeholder="真實姓名" name="fullName" /><br /><br />
                            </div>
                            <div class="form-group">
                                <input class="form-control registerEmail required" type="email"
                                    placeholder="請輸入E-ami" name="email" /><br /><br />
                            </div>
                            <div class="form-group">
                                <input class="form-control registerSmartPhone required" type="password"
                                    placeholder="行動電話" id="registerSmartPhone" name="smartPhone" /><br /><br />
                            </div>
                            <div class="form-group genderDiv">
                                <label class="col-md-4 ms-3 genderText">性別：</label>
                                <div class="form-check form-check-inline col-md-4">
                                    <input class="form-check-input mt-3" type="radio" name="gender" id="male" />
                                    <label class="form-check-label" for="male">男</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input mt-3" type="radio" name="gender" id="female" />
                                    <label class="form-check-label" for="female">女</label>
                                </div>
                            </div>
                            <div class="form-group"><br /><br />
                                <input class="form-control registerBirthday required birthdayText" type="date" name="birthday" /><br /><br />
                            </div>
                            <div class="form-group text-center agreeCheckbox"><br />
                                <label htmlFor="agree" class="agreeLabel"><input name="agree" id="agree" type="checkbox" />我已閱讀並同意
                                    <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#rule"
                                        class="ruleClass">VGT會員條款</a>
                                </label>
                            </div>
                            <div class="form-group text-center col-md-12"><br />
                                <span class="myText">需勾選同意會員條款，才能完成會員申請哦！</span>
                            </div>
                            <div class="form-group text-center">
                                <button type="submit" class="btn disabled" aria-disabled="true"
                                    id="submitBtn">立即註冊</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div class="modal fade row col-md-12" id="rule">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content ruleModal">

                            <div class="modal-header">
                                <h4 class="form-title">請詳細閱讀並同意使用聲明</h4>
                            </div>


                            <div class="modal-body">
                                非常歡迎您光臨「VGT網站」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：<br />
                                <br />
                                一、隱私權保護政策的適用範圍<br />
                                隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。<br />
                                <br />
                                二、個人資料的蒐集、處理及利用方式<br />
                                當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。<br />
                                本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。<br />
                                於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。<br />
                                為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。<br />
                                <br />
                                三、資料之保護<br />
                                本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。<br />
                                如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。<br />
                                <br />
                                四、網站對外的相關連結<br />
                                本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。<br />
                                <br />
                                五、與第三人共用個人資料之政策<br />
                                本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。<br />
                                <br />
                                前項但書之情形包括不限於：<br />
                                <br />
                                經由您書面同意。<br />
                                法律明文規定。<br />
                                為免除您生命、身體、自由或財產上之危險。<br />
                                與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。
                                當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。<br />
                                有利於您的權益。<br />
                                本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。<br />
                                <br />
                                六、Cookie之使用<br />
                                為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行。<br />
                                <br />
                                七、隱私權保護政策之修正<br />
                                本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。<br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Register;