import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from "../../utils/emitter"
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            address: '',
            phonenumber: '',
            gender: '',
            roleId: ''
        }
        this.listenToEmitter();
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
        console.log('mouting modal')
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnchageInput = (event, id) => {
        //bad code .modify state
        // this.state[id] = event.target.value;

        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad state: ', this.state)
        // })

        //good code
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        });
    }

    checkValideInput = () => {
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

    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            // call api create modal
            // console.log(`check props child`, this.props)
            this.props.createNewUser(this.state);
        }
    }
    render() {
        // console.log(`check child props`, this.props);
        // console.log(`check child open modal`, this.props.isOpen);
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchageInput(event, "email") }}
                                value={this.state.email}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type='password'
                                onChange={(event) => { this.handleOnchageInput(event, "password") }}
                                value={this.state.password}
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
                        onClick={() => { this.handleAddNewUser() }}
                    >Add new</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);










