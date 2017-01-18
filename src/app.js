import React from 'react';
import ReactDom from 'react-dom';
import { ReactRouter } from './router';
import { Provider } from 'mobx-react';
import * as stores from './stores';

ReactDom.render(
    <Provider {...stores}>
        <ReactRouter />
    </Provider>,
    document.getElementById("root")
);