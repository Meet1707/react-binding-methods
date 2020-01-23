import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Calc_Nums from './App';
// import ButtonEvent from './buttonEvent'
 import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './HandleEvents/Inline-binding';
import ConstructorBinding from './HandleEvents/Constructor-Binding';
import ArrowFunction from './HandleEvents/arrow-function';
import BindWithParameter from './HandleEvents/bind-with-parameter'
import ArrowFunctionWithParameter from './HandleEvents/bind-with-parameter-arrow-function'
//ReactDOM.render(<div className="w-50 mx-auto borderblack"><Calc_Nums /></div>, document.getElementById('root'));
//ReactDOM.render(<ButtonEvent />,document.getElementById('buttonClick'));
ReactDOM.render(<App />,document.getElementById('inlineBinding'));
ReactDOM.render(<ConstructorBinding />, document.getElementById('constructorBinding'));
 ReactDOM.render(<ArrowFunction />, document.getElementById('arrowBinding'));
ReactDOM.render(<BindWithParameter />, document.getElementById('bindWithParameter'));
 ReactDOM.render(<ArrowFunctionWithParameter />, document.getElementById('bindWithParameterArrowFunction'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();