import React from 'react';
import Head from 'next/head';
import css from 'next/css';
import { Provider } from 'react-redux'
import { reducer, initStore, startClock } from '../redux/store'
import Editor from '../components/Editor';

css.global('body',  { margin: 0 })

class App extends React.PureComponent {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    return  { initialState: store.getState(), isServer }
  }

  constructor (props) {
    super(props)

    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render = () => (
    <div className={appStyles}>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Oxygen:400,700&amp;subset=latin-ext" rel="stylesheet" />
      </Head>
      <Provider store={this.store}>
        <Editor />
      </Provider>
    </div>
  );
}

const appStyles = css({
  fontFamily: 'Oxygen, sans-serif',
});

export default App;
