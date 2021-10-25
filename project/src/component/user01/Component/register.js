import React, { Component, useState } from 'react';
import '../css/register.css';
import '../js/register';
import axios from 'axios';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            password1:'',
            truename: '',
            email: '',
            phone: 1,
            trueid: '',
            birthdate: '',
            dNoneNullAccount: 'hidden',
            dNoneMinAccount: 'hidden',
            dNoneMaxAccount: 'hidden',
            dNoneNullPassword: 'hidden',
            dNoneMinPassword: 'hidden',
            dNoneMaxPassword: 'hidden',
            dNoneNullRPassword: 'hidden',
            dNoneRPassword: 'hidden',
            dNoneNullTruename: 'hidden',
            dNoneNullEmail: 'hidden',
            dNoneEmail: 'hidden',
            dNoneNullPhone: 'hidden',
            dNonePhone: 'hidden',
            dNoneNullTrueid: 'hidden',
            dNoneTrueid: 'hidden',
            btnDisabled: '',
        };
    }

    // 帳號驗證
    accountBlur = (e) => {
        if (e.target.value == "") {
            this.setState({
                dNoneNullAccount: 'visible',
                dNoneMinAccount: 'hidden',
                dNoneMaxAccount: 'hidden',
            })
        } else if (e.target.value.length < 6) {
            this.setState({
                dNoneNullAccount: 'hidden',
                dNoneMinAccount: 'visible',
                dNoneMaxAccount: 'hidden',
            })
        } else if (e.target.value.length > 12) {
            this.setState({
                dNoneNullAccount: 'hidden',
                dNoneMinAccount: 'hidden',
                dNoneMaxAccount: 'visible',
            })
        } else {
            this.setState({
                dNoneNullAccount: 'hidden',
                dNoneMinAccount: 'hidden',
                dNoneMaxAccount: 'hidden',
            })
        }
    };

    // 密碼驗證
    passwordBlur = (e) => {
        if (e.target.value == "") {
            this.setState({
                dNoneNullPassword: 'visible',
                dNoneMinPassword: 'hidden',
                dNoneMaxPassword: 'hidden',
            })
        } else if (e.target.value.length < 6) {
            this.setState({
                dNoneNullPassword: 'hidden',
                dNoneMinPassword: 'visible',
                dNoneMaxPassword: 'hidden',

            })
        } else if (e.target.value.length > 12) {
            this.setState({
                dNoneNullPassword: 'hidden',
                dNoneMinPassword: 'hidden',
                dNoneMaxPassword: 'visible',
            })
        } else {
            this.setState({
                dNoneNullPassword: 'hidden',
                dNoneMinPassword: 'hidden',
                dNoneMaxPassword: 'hidden',
                password1 : this.state.password,
            })
        }
    };

    //再次輸入密碼驗證

    rpasswordBlur = (e) => {
        if (e.target.value == "") {
            this.setState({
                dNoneNullRPassword: 'visible',
                dNoneRPassword: 'hidden',
            })
        }else if (e.target.value != this.state.password1){
            this.setState({
                dNoneNullRPassword: 'hidden',
                dNoneRPassword: 'visible',
            })
        }else {
            this.setState({
                dNoneNullRPassword: 'hidden',
                dNoneRPassword: 'hidden',
            })
        }
    }

    // 姓名驗證
    truenameBlur = (e) => {
        if (e.target.value == "") {
            this.setState({
                dNoneNullTruename: 'visible',
            })
        } else {
            this.setState({
                dNoneNullTruename: 'hidden',
            })
        }
    }

    // email驗證
    emailBlur = (e) => {
        var Regexp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        var result = Regexp.test(e.target.value);
        if (e.target.value == "") {
            this.setState({
                dNoneNullEmail: 'visible',
                dNoneEmail: 'hidden',
            })
        } else if (result !== true) {
            this.setState({
                dNoneNullEmail: 'hidden',
                dNoneEmail: 'visible',
            })
        } else {
            this.setState({
                dNoneNullEmail: 'hidden',
                dNoneEmail: 'hidden',
            })
        }
    }

    // 行動電話驗證
    phoneBlur = (e) => {
        var Regexp = /^[0][9]\d{8}$/;
        var result = Regexp.test(e.target.value);
        if (e.target.value == "") {
            this.setState({
                dNoneNullPhone: 'visible',
                dNonePhone: 'hidden',
            })
        } else if (result !== true) {
            this.setState({
                dNoneNullPhone: 'hidden',
                dNonePhone: 'visible',
            })
        } else {
            this.setState({
                dNoneNullPhone: 'hidden',
                dNonePhone: 'hidden',
            })
        }
    }

    // 身分證驗證
    trueidBlur = (e) => {
        var Regexp = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
        var result = Regexp.test(e.target.value);
        if (e.target.value == "") {
            this.setState({
                dNoneNullTrueid: 'visible',
                dNoneTrueid: 'hidden',
            })
        } else if (result !== true) {
            this.setState({
                dNoneNullTrueid: 'hidden',
                dNoneTrueid: 'visible',
            })
        } else {
            this.setState({
                dNoneNullTrueid: 'hidden',
                dNoneTrueid: 'hidden',
            })
        }
    }

    newRegister = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    submitButton = () => {
        window.location.href = 'http://localhost:8000/VGT/FrontPage';
    }

    submitNewRegister = (e) => {
        e.preventDefault();
        console.log("ok")
        axios.post('http://localhost:3000/VgtLogin/register', {
            account: this.state.account,
            password: this.state.password,
            truename: this.state.truename,
            email: this.state.email,
            phone: this.state.phone,
            trueid: this.state.trueid,
            birthdate: this.state.birthdate,
        })
    };




    render() {
        var checkarray = [
            this.state.dNoneNullAccount, this.state.dNoneMinAccount,
            this.state.dNoneMaxAccount, this.state.dNoneNullPassword,
            this.state.dNoneMinPassword, this.state.dNoneMaxPassword,
            this.state.dNoneNullRPassword, this.state.dNoneRPassword,
            this.state.dNoneNullTruename, this.state.dNoneNullEmail,
            this.state.dNoneEmail, this.state.dNoneNullPhone,
            this.state.dNonePhone, this.state.dNoneNullTrueid,
            this.state.dNoneTrueid,
        ];
        return (
            <div className="container">
                <div className="form-group titleDiv">
                    <h3 className="formTitle">填寫註冊資料</h3>
                </div>
                <div className="container row">
                    <div className="form col-md-6">
                        <form className="form-horizontal" novalidate id="registerForm" method="POST" action="http://localhost:3000/VgtLogin/register" onSubmit={this.submitNewRegister}>
                            <div className="form-group mt-5 divRelative">
                                <input className="form-control registerUserName" required type="text" placeholder="請輸入帳號" name="account"
                                    onChange={this.newRegister} onBlur={this.accountBlur} />
                                <span className="text-myset">長度為6-12字元，註冊成功後不能修改。</span>
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneNullAccount}` }}>請輸入帳號</div>
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneMinAccount}` }}>帳號長度不得少於6字元</div>
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneMaxAccount}` }}>帳號長度不得超過12字元</div>
                            </div>
                            <div className="form-group divRelative">
                                <input className="form-control registerPassword" required type="password" placeholder="請輸入密碼"
                                    id="registerPassword" name="password" onChange={this.newRegister} onBlur={this.passwordBlur} />
                                <span className="text-myset">長度為6-20字元，字母請區分大小寫。</span>
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneNullPassword}` }} >請輸入密碼</div>
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneMinPassword}` }} >密碼長度不得少於6字元</div>
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneMaxPassword}` }}>密碼長度不得超過20字元</div>
                            </div>
                            <div className="form-group divRelative">
                                <input className="form-control registerrPassword" required type="password" placeholder="再次輸入密碼"
                                    name="rpassword" onChange={this.newRegister} onBlur={this.rpasswordBlur} />
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneNullRPassword}` }} >請再次輸入密碼</div>
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneRPassword}` }}>兩次輸入的密碼不一致，請重新輸入！</div>
                                <br />
                            </div>
                            <div className="form-group divRelative">
                                <input className="form-control registerFullName" required type="text"
                                    placeholder="真實姓名" name="truename" onChange={this.newRegister} onBlur={this.truenameBlur} />
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneNullTruename}` }}>請輸入真實姓名</div>
                                <br />
                            </div>
                            <div className="form-group divRelative">
                                <input className="form-control registerEmail" required type="email"
                                    placeholder="請輸入E-ami" name="email" onChange={this.newRegister} onBlur={this.emailBlur} />
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneNullEmail}` }}>請輸入E-mail</div>
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneEmail}` }}>E-mail格式不正確</div>
                                <br />
                            </div>
                            <div className="form-group divRelative">
                                <input className="form-control registerSmartPhone" required type="text"
                                    placeholder="請輸入行動電話" name="phone" onChange={this.newRegister} onBlur={this.phoneBlur} />
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneNullPhone}` }}>請輸入行動電話</div>
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNonePhone}` }}>行動電話格式不正確</div>
                                <br />
                            </div>
                            <div className="form-group divRelative">
                                <input className="form-control registerTrueid" required type="text"
                                    placeholder="請輸入身份證字號" name="trueid" onChange={this.newRegister} onBlur={this.trueidBlur} />
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneNullTrueid}` }}>請輸入身份證字號</div>
                                <div className='textAbsolute' style={{ visibility: `${this.state.dNoneTrueid}` }}>身分證格式不正確</div>
                                <br/>
                            </div>
                            <div className="form-group divRelative">
                                <input className="form-control registerBirthday birthdayText" required type="date"
                                    name="birthdate" onChange={this.newRegister} /><br /><br />
                            </div>
                            <div className="form-group text-center agreeCheckbox"><br />
                                <label htmlhtmlFor="agree" className="agreeLabel myText">
                                    <input name="agree" id="agree" type="checkbox" onChange={this.newRegister} />註冊即表示同意&nbsp;
                                    <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#rule"
                                        className="ruleClassName">VGT會員條款</a>
                                </label>
                            </div><br /><br />
                            {/* <div className="form-group text-center col-md-12"><br />
                                <span className="myText">需勾選同意會員條款，才能完成會員申請哦！</span>
                            </div> */}
                            <div className="form-group text-center">
                                {/* <button type="submit" className={`btn ${this.state.btnDisabled}`} aria-disabled="true"
                                    id="submitBtn" onClick={this.submitButton}>立即註冊</button> */}
                                <button type="submit" className="btn" id="submitBtn"
                                    data-bs-toggle="modal" data-bs-target="#success"
                                    disabled={checkarray.includes("visible") ? this.state.btnDisabled == "" : this.state.btnDisabled == "true"}
                                >立即註冊</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='modal fade row' id='success'>
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            <div className="modal-body modalBobySuccess">
                                <h4 className="text-center">註冊成功！請重新登入</h4>

                                <div className='text-end'>
                                    <button type="button" className="btn" onClick={this.submitButton}>確定</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade row col-md-12" id="rule">
                    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content ruleModal">
                            <div className="modal-header">
                                <h4 className="form-title">請詳細閱讀並同意使用聲明</h4>
                                {/* <button type="button" className="btn-close" data-bs-dismiss="modal"></button> */}
                            </div>
                            <div className="modal-body">
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