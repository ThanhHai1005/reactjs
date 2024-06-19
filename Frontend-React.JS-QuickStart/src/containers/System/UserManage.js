import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import { flatMap } from 'lodash';
import { emitter } from "../../utils/emitter";
import { toast } from 'react-toastify';
import ModalEditUser from './ModalEditUser';
import Footer from '../../containers/System/footer/footer';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }


    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleDeleteUser = async (user) => {
        console.log('click Delete', user)
        try {
            let res = await deleteUserService(user.id);
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact();

            } else {
                alert(res.errMessage)
            }
            toast.success("Delete user success!");
            console.log(res)
        } catch (e) {
            console.log(e);
        }
    }

    handleEditUser = (user) => {
        console.log('info', user)
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }

    doEditUser = async (user) => {
        try {
            let res = await editUserService(user);
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUsersFromReact()
            } else {
                alert(res.errCode)
            }
        } catch (e) {
            console.log(e)
        }

    }
    /**
     * Life cycle
     * Run component:
     * 1. Run construct -> init state
     * 2. Did mount (set state) : born ; unmount
     * 3. Render
     */
    render() {
        // console.log('check render', this.state)
        let arrUsers = this.state.arrUsers;
        return (
            // <div className="users-container">
            //     <h1>
            //         hello About Us

            //     </h1>
            //     <ModalUser
            //         isOpen={this.state.isOpenModalUser}
            //         toggleFromParent={this.toggleUserModal}
            //         createNewUser={this.createNewUser}

            //     />
            //     {this.state.isOpenModalEditUser &&
            //         <ModalEditUser
            //             isOpen={this.state.isOpenModalEditUser}
            //             toggleFromParent={this.toggleUserEditModal}
            //             currentUser={this.state.userEdit}
            //             editUser={this.doEditUser}
            //         />}
            //     <div className='title text-center'>Manage users with Gwen</div>
            //     <div className='mx-1'>
            //         <button
            //             className='btn btn-primary px-3'
            //             onClick={() => this.handleAddNewUser()}
            //         > <i className="fas fa-plus"></i>Add new users</button>
            //     </div>
            //     <div className='users-table mt-3 mx-1'>
            //         <table id="customers">
            //             <tbody>
            //                 <tr>
            //                     <th>Email</th>
            //                     <th>Firstname</th>
            //                     <th>Lastname</th>
            //                     <th>Address</th>
            //                     <th>Actions</th>
            //                 </tr>

            //                 {arrUsers && arrUsers.map((item, index) => {
            //                     // console.log('gwen check map', item, index)
            //                     return (

            //                         <tr>
            //                             <td>{item.email}</td>
            //                             <td>{item.firstname}</td>
            //                             <td>{item.lastname}</td>
            //                             <td>{item.address}</td>
            //                             <td>
            //                                 <button
            //                                     className='btn-edit'
            //                                     onClick={() => this.handleEditUser(item)}
            //                                 ><i className="fas fa-pencil-alt"></i></button>
            //                                 <button
            //                                     className='btn-delete'
            //                                     onClick={() => this.handleDeleteUser(item)}
            //                                 ><i className="fas fa-trash"></i></button>
            //                             </td>
            //                         </tr>
            //                     )
            //                 })     // thay vì dùng for thid dùng vòng lập map
            //                 }
            //             </tbody>
            //         </table>
            //     </div>
            // </div>

            <Fragment>
                <div className='user-redux-container'>
                    <div className='title'>
                        Về chúng tôi
                    </div>
                </div>

                <Footer />
            </Fragment>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
