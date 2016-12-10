import React from 'react';
import Immutable from 'immutable';
import {
  Provider,
} from 'react-redux';
import reducer from '../redux/reducer';
import initStore from '../redux/initStore';
import App from '../components/App';

class Root extends React.PureComponent {
  static getInitialProps({req}) {
    const isServer = Boolean(req);
    const store = initStore(reducer, undefined, isServer);

    return {
      initialState: store.getState(),
      isServer,
    };
  }

  static propTypes = {
    initialState: React.PropTypes.instanceOf(Immutable.Map).isRequired,
    isServer: React.PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.store = initStore(reducer, props.initialState, props.isServer);
  }

  render = () => (
    <Provider store={this.store}>
      <App />
    </Provider>
  );
}

export default Root;
