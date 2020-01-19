import React, { Component } from 'react';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';

class App extends Component {

    render() {
        return (
            <div className="ui container">
                <LanguageStore>

                    <LanguageSelector />
                    {/* UserCreate is what needs to know some info out of the context object */}
                    {/* value is required */}
                    <ColorContext.Provider value="red">

                        <UserCreate />

                    </ColorContext.Provider>
                    {/* every time we render an instance of the provider, we create a new separate 'pipe' of info */}

                </LanguageStore>
            </div>
        );
    }
};

export default App;