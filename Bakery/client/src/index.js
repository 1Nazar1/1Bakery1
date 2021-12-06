import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import BakeryStore from "./store/BakeryStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new BakeryStore(),
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
