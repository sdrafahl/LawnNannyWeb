import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

import '../../sass/helpers/FormInput.css';

export default class FormInput extends Component {
    constructor() {
        super();

        this.state = {
            isSelected: false
        };
    }

    changeState(property, value) {
        this.setState(previousState => Object.assign({}, previousState, {
                [property]: value
            }));
    }

    render() {
        const {label, className, type, onChange} = this.props,
            {isSelected} = this.state;

        return (
            <div className={`${className || ""}`}>
                <div
                    className={`form-input-label${isSelected ? " form-input-label--selected" : ""}`}
                >
                    {label}
                </div>
                <Input
                    type={type}
                    onChange={onChange}
                />
            </div>
        )
    }
}