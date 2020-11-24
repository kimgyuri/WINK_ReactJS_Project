import React from 'react';
import back from 'src/images/back.png';

class header extends React.Component {
    render() {
        return (
            <img src={back}>
            <div className="text">리뷰 남기기</div>
        )
    }
}

export default header;
