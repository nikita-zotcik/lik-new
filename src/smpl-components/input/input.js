import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorShow: false
        };
        this.validation = this.validation.bind(this);
    }

    updated() {
        const { defaultValue = '', update = false } = this.props;
        update && this.validation(defaultValue)
    }

    componentWillReceiveProps(nextProps) {
        const { defaultValue = '', update = false, updatedDone = () => { } } = nextProps
        update && this.validation(defaultValue);
        updatedDone();
    }

    validation(el) {
        let { errorShow } = this.state;
        const { name } = this.props;
        const value = typeof el === 'object' ? el.target.value : el;
        let error = false;

        if (!!this.props.dublPass) {
            error = this.props.error(value, this.props.dublPass)
        }
        else {
            error = this.props.error(value)
        }

        if (value === '') {
            this.setState({ errorShow: true });
            return '';
        }
        if (error) {
            this.props.onChange(name, value);
        } else {
            this.props.onChange(name, '');

        }
        this.setState({ errorShow: !error });

    }

    render() {
        const { errorMes = '', placeholder = '', update = false, defaultValue = '', type = '', name = '', title = '' } = this.props;
        const { errorShow } = this.state;

        return (
            <div className="input-block">
                <div className="input-title">
                    {title}
                </div>
                <div>
                    <input type={type} name={name} autoComplete="off" placeholder={placeholder} defaultValue={defaultValue} className={`input-value ${errorShow ? 'error' : ''}`} onChange={this.validation} />
                </div>
                <span className={`error-message ${errorShow ? 'show' : ''}`}> {errorMes}</span>
            </div>
        )
    }
}
