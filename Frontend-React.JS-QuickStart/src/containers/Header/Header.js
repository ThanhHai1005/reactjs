import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, adminMenu2 } from './menuApp';
import './Header.scss';
import { LANGUAGES } from "../../utils";
import { FormattedMessage } from 'react-intl';
import logo1 from '../../assets/images/logo/logo-smarttek.png';
import fb from '../../assets/images/social/1.png';
import fb1 from '../../assets/images/social/11.png';
import yt from '../../assets/images/social/3.png';
import it from '../../assets/images/social/Logo-Linkedin1.png';
class Header extends Component {
    handleChangeLanguage = (language) => {
        // alert(language);
        this.props.changeLanguageAppRedux(language)

    }
    render() {
        const { processLogout, language, userInfo } = this.props;
        console.log("check userInfo", userInfo)
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">

                    <div className='social'>
                        <a>
                            <img className='fb' src={fb} />
                            <img className='fb1' src={fb1} />
                        </a>

                        <a>
                            <img className='' src={yt} />
                        </a>

                        <a>
                            <img className='' src={it} />
                        </a>

                    </div>


                    <Navigator menus={adminMenu} />
                </div>


                <div className='logo header-tabs-container'>
                    <img className='header-logo' src={logo1} />


                </div>

                <div className="header-tabs-container">
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
                    <Navigator menus={adminMenu2} />
                </div>



            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
