import React, { Component, Fragment } from 'react';


import * as actions from "../../../store/actions";
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './footer.scss';
import logoFooter from '../../../assets/images/logo/logo-smarttek.png';
import { LANGUAGES } from "../../../utils";
import { changeLanguageApp } from '../../../store/actions';
class Footer extends Component {
    handleChangeLanguage = (language) => {
        // alert(language);
        this.props.changeLanguageAppRedux(language)

    }
    render() {
        let language = this.props.language;
        // const { processLogout, language, userInfo } = this.props;
        return (
            <Fragment>
                <div className='main-footer'>
                    <div className='footer-wrap'>
                        <div className='footer-left'>
                            <div className='footer-left-logo'>
                                <a>
                                    <img src={logoFooter} />
                                </a>
                                <p>
                                    <FormattedMessage id="homeheader.footerTitle" />
                                    {/* Chúng tôi cung cấp các giải pháp đơn giản cho các vấn đề phức tạp */}
                                </p>
                            </div>

                            <div className='footer-left-language'>
                                <div className='Languages'>

                                    <span className={language === LANGUAGES.VI ? "language-vi active" : "language-vi"}
                                        onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
                                    >
                                        VN
                                    </span>
                                    <span className={language === LANGUAGES.EN ? "language-en active" : "language-en"}
                                        onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
                                    >
                                        EN
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='footer-section'>
                            <h4 className='footer-section-title'>
                                {/* Công ty TNHH GIẢI PHÁP SMARTTEK */}
                                <FormattedMessage id="homeheader.corporate" />
                            </h4>

                            <p>
                                <FormattedMessage id="homeheader.address" />
                            </p>
                            <p>
                                {/* Điện thoại: 0909.86.24.99 - 0911.69.64.46 */}
                                <FormattedMessage id="homeheader.phone" />
                            </p>
                            <p>
                                Mail: cs@dthholdings.net

                            </p>
                        </div>

                        <div className='footer-section'>
                            <h4 className='footer-section-title'>
                                {/* Đăng kí nhận bản tin */}
                                <FormattedMessage id="homeheader.signUp" />
                            </h4>

                            <p>
                                {/* Kết nối với chúng tôi để theo dõi thông tin mới nhất. */}
                                <FormattedMessage id="homeheader.connect" />
                            </p>

                            <form>
                                <div className='form-pair'>
                                    <div className='form-fiel'>
                                        <input className='input-name' type="text" placeholder={"Họ tên"} />
                                    </div>

                                    <div className='form-fiel'>
                                        <input className='input-name' type="text" placeholder="Số điện thoại" />
                                    </div>
                                </div>

                                <div className='form-fiel'>
                                    <input className='input-email' type="text" placeholder="Địa chỉ email" />
                                    <button className='subscribe-form__submit'>Đăng ký</button>
                                </div>

                            </form>


                        </div>

                    </div>



                </div>

                <div className='copy-right footer-background'>
                    <a>
                        <img src={logoFooter} />
                    </a>
                    <p>&copy;
                        SMARTTEK Technologies, LLC. All Rights Reserved </p>
                </div>
            </Fragment>

        );
    }

}

const mapStateToProps = state => {
    return {
        // isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
