import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {   // khởi tạo state
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnchangeUsername = (event) => { // cập nhật biến vd (nhập tên tài khoản v.v) : event onchange
        this.setState({
            username: event.target.value
        })
    }

    handleOnchangePassword = (event) => { // tương tự cập nhật biến cho password: event onchange
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => { // sử dụng cho hàm onclick ở "login": event onclick
        this.setState({
            errMessage: '' // hiện ra lỗi màu đỏ & clear lỗi đi mỗi lần nhấn login
        })

        try {
            let data = await handleLoginApi(this.state.username, this.state.password); // trường hợp vào thành công
            if (data && data.errCode !== 0) {           //TH login không thành công
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {           //TH login thành công
                this.props.userLoginSuccess(data.user)
            }
        } catch (error) { //nếu có lỗi 
            if (error.response) { // hiện lỗi lên trên nút login màu đỏ
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        //JSX viết trang login theo kiểu JSX
        return (
            <div className='login-background '>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Your Usename'
                                value={this.state.username}
                                onChange={(event) => { this.handleOnchangeUsername(event) }} />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter Your Password'
                                    value={this.state.password}
                                    onChange={(event) => { this.handleOnchangePassword(event) }} />
                                <span
                                    onClick={() => { this.handleShowHidePassword() }}

                                ><i className={this.state.isShowPassword ? 'far fa-eye' : 'fas fa-eye-slash'}></i></span>
                            </div>
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12 '>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Login</button>
                        </div>

                        <div className='col-12'>
                            <span className='forgot-password'>Forgot Your Password</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className='text-another-login mt-3'>Or Login With:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-facebook-f facebook"></i>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-twitter twitter"></i>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
        // adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
