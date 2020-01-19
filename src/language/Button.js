import React, { Component } from 'react';

import LanguageContext from './contexts/LanguageContext';


class Button extends Component {
    // contextType links Button to context object
    // this.context references the info inside the context object
    // static adds a property directly to the class itself
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            <button className="ui button primary">{text}</button>
        )
    }
}

// alternative to 'static contextType = LanguageContext;' :
// Button.contextType = LanguageContext;

export default Button;