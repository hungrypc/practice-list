import React from 'react';

// once you create a context object, set up a default value ('english')
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {/* this is so children components have access to LanguageStore context object */}
                {this.props.children}
            </Context.Provider>
        )
    }
};

export default Context;