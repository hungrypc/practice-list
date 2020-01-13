import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

import App from './App';
// import reducers from '../reducers';

// const store = createStore(reducers, applyMiddleware(thunk))

const Stream = () => {
    return (
        <div>
            {/* <Provider store={store}> */}
                <App />
            {/* </Provider> */}
        </div>
    )
};

export default Stream;