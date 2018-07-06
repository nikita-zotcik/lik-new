import React from 'react'
import { Button, Input, Checkbox, Modal } from '../../../../smpl-components/index'
import defaultProps from '../../../../default'
import Validation from '../../../validation'

export default class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            password: ''
        }
        this.selectData = this.selectData.bind(this);
        this.checkData = this.checkData.bind(this);
        this.updatedDone = this.updatedDone.bind(this);
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
                'password' === name &&
                    this.setState({ password: value });
                stop = false;
                this.setState(data);
                return
            }
        })
        if (stop) {
            'password' === name &&
                this.setState({ password: value });
            data.push({ name: name, value: value })
            this.setState(data);
        }

        this.props.saveData(data);
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
        if (data.length < 5) {
            return false;
        }
        data.forEach((el) => {
            if (el.value.length === 0)
                succses = false
        })
        return succses;
    }

    render() {
        const { changeStep, entry = [] } = this.props;
        const { password, update } = this.state;
        const { content } = this.props.data;
        const { btnPrimaryColor } = defaultProps.btnStyles;

        return (
            <div className="left-panel-block">
                <div className="left-panel-container-header">
                    {content.container_header}
                </div>
                <div className="left-panel-container-text left-panel-container-content">
                    {content.header_content}
                </div>

                <div className="container-inp">
                    <Input title={'FORNAVN'}
                        name='name'
                        updatedDone={this.updatedDone()}
                        update={update}
                        defaultValue={this.getSaveData('name')}
                        placeholder={'Skriv dit fornavn'}
                        errorMes={'navnet er forkert'}
                        error={(el) => { return Validation.validationName(el) }}
                        onChange={(name, value) => { this.selectData(name, value) }} />
                        
                    <Input title={'EFTERNAVN'}
                        name='surname'
                        updatedDone={this.updatedDone()}
                        update={update}
                        defaultValue={this.getSaveData('surname')}
                        placeholder={'Skriv dit efternavn'}
                        errorMes={'navnet er forkert'}
                        error={(el) => { return Validation.validationName(el) }}
                        onChange={(name, value) => { this.selectData(name, value) }} />
                </div>
                <div className="container-inp">
                    <Input title={'Arbejdsmail'}
                        name='email'
                        updatedDone={this.updatedDone()}
                        update={update}
                        defaultValue={this.getSaveData('email')}
                        placeholder={'E-mail (arbejdsmail) '}
                        errorMes={'e-mail er forkert'}
                        error={(el) => { return Validation.validationEmail(el) }}
                        onChange={(name, value) => { this.selectData(name, value) }} />

                    <Input title={'Mobilnummer på kontaktperson'}
                        updatedDone={this.updatedDone()}
                        update={update}
                        defaultValue={this.getSaveData('number')}
                        name='number'
                        placeholder={'Mobilnummer (arbejde)'}
                        errorMes={'nummeret er forkert'}
                        error={(el) => { return Validation.validationCVR(el) }}
                        onChange={(name, value) => { this.selectData(name, value) }} />
                </div>
                <div className="container-inp">
                    <Input title={'VÆLG PASSWORD (min 8 karakterer)'}
                        updatedDone={this.updatedDone()}
                        update={update}
                        defaultValue={this.getSaveData('password')}
                        name='password'
                        placeholder={'Skriv et password '}
                        type={'password'}
                        errorMes={'adgangskode er forkert'}
                        error={(el) => { return Validation.validationPass(el) }}
                        onChange={(name, value) => { this.selectData(name, value) }} />

                    <Input title={'GENTAG PASSWORD'}
                        name='dublePassword'
                        updatedDone={this.updatedDone()}
                        update={update}
                        defaultValue={this.getSaveData('dublePassword')}
                        type={'password'}
                        placeholder={'Gentag password'}
                        errorMes={'adgangskode er forkert'}
                        dublPass={password}
                        error={(el, el2) => { return Validation.validationDublPass(el, el2) }}
                        onChange={(name, value) => { this.selectData(name, value) }} />
                </div>

                <div className="container-checkbox">
                    <Checkbox title={'Jeg accepterer Likvido Inkasso ApS '} url={'https://likvido.dk/betingelser/'} />
                </div>
                <div className="container-button">
                    <Button onChange={() => this.checkData() && changeStep(true)} title={'Næste →'} styles={{ backgroundColor: btnPrimaryColor }} />
                    <Button onChange={() => changeStep(false)} title={'Forrige'} className={'button button-back'} />
                </div>
            </div>
        )
    }
}
