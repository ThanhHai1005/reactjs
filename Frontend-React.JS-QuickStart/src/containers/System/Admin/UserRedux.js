import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllcodeService } from "../../../services/userService";
import { LANGUAGES } from '../../../utils';
import * as actions from "../../../store/actions"
import Footer from '../footer/footer';

class organi extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         genderArr: [],

    //     }
    // }

    async componentDidMount() {
        // this.props.getGenderStart();
        // try {
        //     let res = await getAllcodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        //     console.log('Gwen check res: ', res)

        // } catch (e) {
        //     console.log(e)
        // }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (prevProps.genderRedux !== this.props.genderRedux) {
        //     this.setState({
        //         genderArr: this.props.genderRedux
        //     })
        // }
    }
    render() {
        // let genders = this.state.genderArr;


        let language = this.props.language;
        // console.log("Gwen check props from redux", this.props.genderRedux)
        return (
            <Fragment>
                <div className='user-redux-container'>
                    <div className='title'>
                        Sơ đồ tổ chức
                    </div>
                </div>

                <Footer />
            </Fragment>


        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        // genderRedux: state.admin.genders
    };
};



const mapDispatchToProps = dispatch => {
    return {
        // getGenderStart: () => dispatch(actions.fetchGenderStart())

        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(organi);
