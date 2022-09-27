import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';
import { GithubAppState } from './types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const fakeAppContext: GithubAppState = {
  currentUser: { name: "Fake Person", id: 0 },
  repos: []
}
export const Context = createContext<GithubAppState>(fakeAppContext);
root.render(

  <React.StrictMode>
    <Context.Provider value={fakeAppContext}>
      <App />

    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
