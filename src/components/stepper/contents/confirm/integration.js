import { Button, Input } from '../../../../smpl-components/index';
import defaultProps from '../../../../default';
import Validation from '../../../validation';
import React from 'react';

export default class Integration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.data = [{ name: 'step 1', value: 'test test 1' }, { name: 'step 2', value: 'test test 2' }, {
            name: 'step 3',
            value: 'test test 3'
        }];
    }

    updatedDone() {
        this.state.update && this.setState({ update: false })
    }

    selectData(name, value) {
        let { data } = this.state;
        let stop = true;

        data.forEach((el, index) => {
            if (el.name === name) {
                data[index].value = value;
                stop = false;
                this.setState(data);
                return
            }
        })
        if (stop) {
            data.push({ name: name, value: value })
            this.setState(data);
        }

        // this.props.saveData(data);
    }

    getSaveData(name) {
        const { entry = [] } = this.props;
        let value = '';
        entry.forEach((el, index) => {
            if (el.name === name) {
                value = entry[index].value;
            }
        })
        return value;
    }

    checkData() {
        const { data } = this.state;
        let succses = true;
        this.setState({ update: true })
        if (data.length < 0) {
            return false;
        }
        data.forEach((el) => {
            if (el.value.length === 0)
                succses = false
        })
        return succses;
    }

    render() {
        const { btnPrimaryColor } = defaultProps.btnStyles;
        const { changeStep, program, data,changeLoading } = this.props;
        const { update } = this.state;

        return (
            <div className="container">
                <div className="left-panel-block">
                    <div className="left-panel-container-header">
                        {data.content.container_header}
                    </div>
                    <div className="left-panel-container-header-content left-panel-container-text">
                        {data.content.header_content} <a href='#' className="panel-bl-content">på 71 74 93 62 eller få os til at opsætte
                        integrationen </a>
                    </div>
                    <div className="left-panel-container-body">
                        <div>
                            {program === 'dinero' &&
                                <div className="container-inp">
                                    <Input title={'Din dinero API nøgle'}
                                        name='API'
                                        updatedDone={this.updatedDone()}
                                        update={update}
                                        defaultValue={this.getSaveData('name')}
                                        placeholder={'Skriv din API nøgle '}
                                        errorMes={'API er forkert'}
                                        error={(el) => { return Validation.validationName(el) }}
                                        onChange={(name, value) => { this.selectData(name, value) }} />
                                </div>
                            }
                            <div className="container-inp">
                                <Input title={'Dit Dinero firma ID'}
                                    name='firmaID'
                                    updatedDone={this.updatedDone()}
                                    update={update}
                                    defaultValue={this.getSaveData('name')}
                                    placeholder={'Skriv dit firma ID'}
                                    errorMes={'ID er forkert'}
                                    error={(el) => { return Validation.validationName(el) }}
                                    onChange={(name, value) => { this.selectData(name, value) }} />

                            </div>
                        </div>
                        <div className="left-panel-container-body-content">
                            <span className="left-panel-container-body-content-title">Sådan gør du:</span>
                            <div>
                                {this.data.map((el, index) => {
                                    return <span key={index}>{el.name}: {el.value}</span>
                                })}
                            </div>
                            <span className="left-panel-container-body-content-footer"> Du kan også se vores video guide, <u>klik her</u> </span>
                        </div>
                    </div>
                    <div className="container-button">
                        <Button onChange={() => {changeStep(true);changeLoading(true)}} title={'Opsæt integration  →'} styles={{ backgroundColor: btnPrimaryColor, width: 230 }} />
                        <Button onChange={() => changeStep(false)} title={'Afbryd'} className={'button button-back'} />
                    </div>
                </div>
            </div>
        )
    }
}
