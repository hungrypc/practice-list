import React, { Component } from 'react';

import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';


class Button extends Component {
    // contextType links Button to context object
    // this.context references the info inside the context object
    // static adds a property directly to the class itself

    // static contextType = LanguageContext;
    // consumers don't need contextType

    // this.context is for when we get info from a single context obj
    // consumers are used when we have multiple contexts

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderColor(color) {
        return color === 'red' ? 'red' : 'primary';
    }

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            < ColorContext.Consumer >
                {color => (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {/* this child is always going to be a function */}
                            {/* {(value) => value === 'english' ? 'Submit' : 'Voorleggen'} OR */}
                            {({ language }) => this.renderSubmit(language)}
                        </LanguageContext.Consumer>
                    </button >
                )}
            </ColorContext.Consumer >
        )
    }
}

// alternative to 'static contextType = LanguageContext;' :
// Button.contextType = LanguageContext;

export default Button;