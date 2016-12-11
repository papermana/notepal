import React from 'react';
import {
  Provider,
} from 'react-redux';
import RootComponent from '../components/RootComponent';
import App from '../components/App';
import Toolbar from '../components/Toolbar';
import Editor from '../components/Editor';

class Index extends RootComponent {
  render = () => (
    <Provider store={this.store}>
      <App>
        <Toolbar />
        <Editor />
      </App>
    </Provider>
  );
}

export default Index;
