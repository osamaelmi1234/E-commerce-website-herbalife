import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import cartReducer from './store/reducers/cartItems';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  : null || compose;


const rootReducer= combineReducers({
	
	cart: cartReducer,
	auth:authReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
	<Provider store={store}>
	<BrowserRouter>
	<App/>
	</BrowserRouter>
	</Provider>
)





ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
