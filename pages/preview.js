import React from 'react';
import {
  Provider,
} from 'react-redux';
import RootComponent from '../components/RootComponent';
import App from '../components/App';
import PreviewToolbar from '../components/PreviewToolbar';
import PreviewComponent from '../components/Preview';
import {
  getLocalState,
} from '../redux/actions';

class Preview extends RootComponent {
  componentDidMount = () => {
    this.store.dispatch(getLocalState());
  };

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
