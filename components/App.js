import React from 'react';
import css from 'next/css';
import Head from 'next/head';
import * as styleConsts from '../styles/constants';

css.global('body', {
  margin: 0,
  backgroundColor: styleConsts.appBackgroundColor,
});

const App = (props) => (
  <div className={appStyles}>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Oxygen:400,700&amp;subset=latin-ext" rel="stylesheet" />
    </Head>
    {props.children}
  </div>
);

const appStyles = css({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Oxygen, sans-serif',
});

export default App;
