import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducers from '../reducers';

const Songs = () => {
    return (
        <div>
            <Provider store={createStore(reducers)}>
                <App />
            </Provider>
        </div>
    )
};

export default Songs;