import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import organi from '../containers/System/Admin/UserRedux';
import Header from '../containers/Header/Header';
import vission from '../containers/System/Admin/Home';
import partner from '../containers/System/Admin/partner';
class System extends Component {
    render() {
        const { systemMenuPath } = this.props;
        return (
            <React.Fragment>
                {<Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            {/* <Route path="/home" component={HomePage} /> */}
                            <Route path="/system/about-us" component={UserManage} />
                            <Route path="/system/organi" component={organi} />
                            <Route path="/system/vission" component={vission} />
                            <Route path="/system/partner" component={partner} />

                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        // isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
