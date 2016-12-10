import React from 'react';
import {
  Provider,
} from 'react-redux';
import RootComponent from '../components/RootComponent';
import App from '../components/App';

class Preview extends RootComponent {
  render = () => (
    <Provider store={this.store}>
      <App />
    </Provider>
  );
}

export default Preview;
