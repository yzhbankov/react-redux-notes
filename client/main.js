import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'

import storeCreate from './store/Store.js'
import App from './container/App.js'

const store = storeCreate();

render(<Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)