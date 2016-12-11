import React from 'react';
import {
  Provider,
} from 'react-redux';
import RootComponent from '../components/RootComponent';
import App from '../components/App';
import PreviewToolbar from '../components/PreviewToolbar';
import PreviewComponent from '../components/Preview';

class Preview extends RootComponent {
  render = () => (
    <Provider store={this.store}>
      <App>
        <PreviewToolbar />
        <PreviewComponent />
      </App>
    </Provider>
  );
}

export default Preview;
