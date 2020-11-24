import React, {Component} from 'react';
import back from 'src/images';

class header extends Component {
    render() {
        return (
            <img src={back} className/>
            <div>리뷰 남기기</div>
        )
    }
}

export default header;