/* 
  React and ReactDOM rendering:

  - Import React and ReactDOM from 'react' and 'react-dom/client'.
  - Import the global styles from './index.css'.
  - Import the styles from 'tw-elements-react'.
  - Create a root using ReactDOM.createRoot, targeting the 'root' element in the HTML document.
  - Render the <App /> component within a <React.StrictMode> for development mode optimizations.
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';

// Create a React root and render the App component within it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
