import React from 'react'
import { RadioButton } from '../../../smpl-components/index';

export default class TopPanel extends React.Component {
    render() {
        const { parts } = this.props;
        return (
            <div className="menu">
                {parts.map((el, index) => {
                    return (
                        <div key={index} className="wrapper">
                            <div className="step">
                                <RadioButton status={el.status} />
                                <div className="name">
                                    <p>{el.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
