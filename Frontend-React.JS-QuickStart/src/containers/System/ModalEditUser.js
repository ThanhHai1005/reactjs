import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from "../../utils/emitter"
import _ from 'lodash'
import { ToastContainer, toast } from 'react-toastify';
class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            address: '',
            phonenumber: '',
            gender: '',
            roleId: ''
        }
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                address: '',
                phonenumber: '',
                gender: '',
                roleId: ''
            })

        })
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: '121212',
                firstname: user.firstname,
                lastname: user.lastname,
                address: user.address,
                phonenumber: user.phonenumber,
                gender: user.gender,
                roleId: user.roleId
            })
        }
        console.log('mouting modal', this.props.currentUser)
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnchageInput = (event, id) => {

        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        });
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstname', 'lastname', 'address', 'phonenumber', 'gender', 'roleId'];
        for (let i = 0; i < arrInput.length; i++) {

            // console.log('check inside look', this.state[arrInput[i]], [arrInput[i]])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Mising parameter:' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.editUser(this.state);
            toast.success("Update user success!");
        }
    }
    render() {
        console.log(`check child props`, this.props);
        // console.log(`check child open modal`, this.props.isOpen);
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Edit a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, "email") }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type='password'
                                onChange={(event) => { this.handleOnchageInput(event, "password") }}
                                value={this.state.password}
                                disabled
                            />
                        </div>

                        <div className='input-container'>
                            <label>Firstname</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, "firstname") }}
                                value={this.state.firstname}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Lastname</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, "lastname") }}
                                value={this.state.lastname}
                            />
                        </div>

                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, "address") }}
                                value={this.state.address}
                            />
                        </div>

                        <div className='input-container medium-width-input'>
                            <label>Phone number</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, "phonenumber") }}
                                value={this.state.phonenumber}
                            />
                        </div>
                        <div className='input-container min-width-input'>
                            <label>Sex</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, "gender") }}
                                value={this.state.gender}
                            />
                        </div>
                        <div className='input-container min-width-input'>
                            <label>RoleId</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, "roleId") }}
                                value={this.state.roleId}
                            />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary "
                        className='px-3'
                        onClick={() => { this.handleSaveUser() }}
                    >Saves changes</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);










