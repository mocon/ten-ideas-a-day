/* eslint react/jsx-no-bind: 0 */
import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInputText: ''
        };
    }

    componentDidMount() {
        this.clearForm();
    }

    clearForm = () => {
        this.setState({ formInputText: '' });
        this.formInput.focus();
    }

    onChange = () => {
        this.setState({ formInputText: this.formInput.value });
        console.log('onChange:', this.state.formInputText);
    }

    onClickButton = (event) => {
        console.log('onClickButton:', this.state.formInputText);
        event.preventDefault();
        this.clearForm();
    }

    render() {
        return (
            <form className="form">
                <input
                    className="form-input"
                    type="text"
                    ref={ (input) => { this.formInput = input; } }
                    onChange={ this.onChange }
                    placeholder=""
                    value={ this.state.formInputText }
                />
                <button
                    className="button button-outline form-button"
                    onClick={ (e) => { this.onClickButton(e); } }
                >
                    Add to List
                </button>
            </form>
        );
    }
}

Form.propTypes = {
    submitForm: React.PropTypes.func
};

export default Form;
