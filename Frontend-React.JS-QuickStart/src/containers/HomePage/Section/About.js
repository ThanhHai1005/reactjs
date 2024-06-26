import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về web dev
                </div>

                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe
                            width="100%" height="400px" src="https://www.youtube.com/embed/IpDNg7Xj2R4"
                            title="SƠN TÙNG M-TP | 7-MINUTE STAGE | CHÚNG TA CỦA TƯƠNG LAI"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div className='content-right'>
                        <p>
                            ✔ Các bạn có thể làm chủ công nghệ, cũng như học được, biết được những kiến thức thực tế dùng tại các công ty hiện nay. Sau khi kết thúc khóa học này, mình tin chắc rằng dự án này đủ lớn, đủ thực tế để cho các bạn mới ra trường viết vào CV xin việc của mình ^^
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
