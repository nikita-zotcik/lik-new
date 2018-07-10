import React from 'react';
import data from '../../../data.json';
import {Button} from '../../../smpl-components/index';
import Phone from '../../../styles/img/phone-call.png';

export default class RightPanel extends React.Component {
    render() {
        const {userImg, userInfo, userNumber, userEmail} = data;
        return (
            <div className="right-panel containers">
                <img className="img" src={userImg}/>
                <div className="right-panel-header">
                    Vil du tale med os før du opretter dig på Likvido?
                </div>
                <div className="right-panel-user-info">
                    {userInfo}
                </div>
                <Button title={'Book et online møde'} className={'right-panel-button'}/>
                <div className="container-number">
                    <span className="panel-bl-content">
                    <img src={Phone}/>
                        {userNumber}
                    </span>
                    <span className="panel-bl-content">
                        {userEmail}
                    </span>
                </div>
            </div>
        )
    }
}
