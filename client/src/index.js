import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import store from './Store/store';
import { themeConst } from './Const/themeConst';

const LightThemeComponent = React.lazy(() => import('./LightApp'));
const DarkThemeComponent = React.lazy(() => import('./DarkApp'));

const curTheme = localStorage.theme == themeConst.DARK ? themeConst.DARK : themeConst.LIGHT;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {curTheme == themeConst.DARK && <Suspense fallback={<div>Loading...</div>}>
        <DarkThemeComponent><App /></DarkThemeComponent>
      </Suspense>}
      {curTheme == themeConst.LIGHT && <Suspense fallback={<div>Loading...</div>}>
        <LightThemeComponent><App /></LightThemeComponent>
      </Suspense>}
      <div></div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
