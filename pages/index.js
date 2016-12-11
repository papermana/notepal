import React from 'react';
import {
  Provider,
} from 'react-redux';
import RootComponent from '../components/RootComponent';
import App from '../components/App';
import IndexToolbar from '../components/IndexToolbar';
import Editor from '../components/Editor';
import {
  getLocalState,
} from '../redux/actions';

class Index extends RootComponent {
  componentDidMount = () => {
    this.store.dispatch(getLocalState());
  };

  render = () => (
    <Provider store={this.store}>
      <App>
        <IndexToolbar />
        <Editor />
      </App>
    </Provider>
  );
}

export default Index;
