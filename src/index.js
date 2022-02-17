import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {index} from './store';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {ModalState} from "./context/modal/ModalState";

ReactDOM.render(
    <React.StrictMode>
            <ModalState>
                <Provider store={index}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </Provider>
            </ModalState>
    </React.StrictMode>,
    document.getElementById('root')
);
