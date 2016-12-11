import React from 'react';
import {
  Provider,
} from 'react-redux';
import RootComponent from '../components/RootComponent';
import App from '../components/App';
import HelpToolbar from '../components/HelpToolbar';
import previewStyles from '../styles/previewStyles';

class Index extends RootComponent {
  render = () => (
    <Provider store={this.store}>
      <App>
        <HelpToolbar />
        <div className={previewStyles} >
          <h1>Help</h1>
          <p>
            Just write in markdown and click "Preview".
          </p>
        </div>
      </App>
    </Provider>
  );
}

export default Index;
