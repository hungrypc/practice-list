import React, { Component } from 'react';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';

class App extends Component {
    state = { language: 'english' }

    onLanguageChange = (language) => {
        this.setState({
            language
        })
    }

    render() {
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
                {/* UserCreate is what needs to know some info out of the context object */}
                {/* value is required */}
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
                {/* every time we render an instance of the provider, we create a new separate 'pipe' of info */}
            </div>
        );
    }
};

export default App;