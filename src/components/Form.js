/* eslint react/jsx-no-bind: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        console.log(this.formInput);
        this.props.onChange(this.formInput.val);
    }

    onClickButton = (e) => {
        e.preventDefault();
        this.props.onSubmit();
        this.clearForm();
    }

    render() {
        return (
            <form className="form">
                <input
                    className="form-input"
                    type="text"
                    ref={ (input) => { this.formInput = input; } }
                    onChange={ () => this.onChange() }
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
    newIdea: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Form;
