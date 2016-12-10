import React from 'react';
import Immutable from 'immutable';
import reducer from '../redux/reducer';
import initStore from '../redux/initStore';

class RootComponent extends React.PureComponent {
  static async getInitialProps({req}) {
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
}

export default RootComponent;
