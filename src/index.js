import React from 'react';
import ReactDOM from 'react-dom';
import AppName from './components/common/AppName';
import App from "./components/App";
import "./Style/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider} from "react-redux";

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store} >
        <Router>
            <AppName />
            <App />
        </Router>
    </ReduxProvider>,

document.getElementById('root')
);

