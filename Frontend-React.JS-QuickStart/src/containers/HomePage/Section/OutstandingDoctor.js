import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
class OutstandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            Bác sĩ nổi bật
                            {/* <FormattedMessage id="specialty.popular" /> */}
                        </span>
                        <button className='btn-section'>
                            Xem thêm
                            {/* <FormattedMessage id="specialty.seemore" /> */}
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-custom'>
                                <div className='custom-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className="position text-center">
                                        <div>Bác sĩ nổi bật 1</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>

                            </div>

                            <div className='section-custom'>
                                <div className='custom-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className="position text-center">
                                        <div>Bác sĩ nổi bật 2</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-custom'>
                                <div className='custom-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className="position text-center">
                                        <div>Bác sĩ nổi bật 3</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-custom'>
                                <div className='custom-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className="position text-center">
                                        <div>Bác sĩ nổi bật 4</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>


                            <div className='section-custom'>
                                <div className='custom-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className="position text-center">
                                        <div>Bác sĩ nổi bật 5</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-custom'>
                                <div className='custom-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className="position text-center">
                                        <div>Bác sĩ nổi bật 6</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
