import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './../Header/Header';
import HomeFooter from './HomeFooter';
import './HomePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            Infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidersToScroll: 1,
        };
        return (
            <div>

                <Header />
                {/* <HomeHeader />
                <Specialty
                    settings={settings}
                />
                <MedicalFacility
                    settings={settings}
                />
                <OutstandingDoctor
                    settings={settings}
                />
                <HandBook
                    settings={settings}
                />

                <About /> */}

                <HomeFooter />

                {/* <div style={{ height: "300px" }}></div> */}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        // isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
