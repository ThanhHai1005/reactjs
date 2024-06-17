import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
// import css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {

    render() {
        return (
            <div className='section-share section-speciality'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id="specialty.popular" />
                        </span>
                        <button className='btn-section'>
                            <FormattedMessage id="specialty.seemore" />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custom'>
                                <div className='bg-image section-speciality' />
                                <div>Khám Tổng quát 1</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-image section-speciality' />
                                <div>Khám Tổng quát 2</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-image section-speciality' />
                                <div>Khám Tổng quát 3</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-image section-speciality' />
                                <div>Khám Tổng quát 4</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-image section-speciality' />
                                <div>Khám Tổng quát 5</div>
                            </div>
                            <div className='section-custom'>
                                <div className='bg-image section-speciality' />
                                <div>Khám Tổng quát 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
