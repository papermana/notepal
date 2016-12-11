import React from 'react';
import {
  Provider,
} from 'react-redux';
import RootComponent from '../components/RootComponent';
import App from '../components/App';
import Toolbar from '../components/Toolbar';
import PreviewComponent from '../components/Preview';

class Preview extends RootComponent {
  render = () => (
    <Provider store={this.store}>
      <App>
        <Toolbar />
        <PreviewComponent />
      </App>
    </Provider>
  );
}

export default Preview;
