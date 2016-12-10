import React from 'react';
import css from 'next/css';
import Head from 'next/head';
import Editor from '../components/Editor';

css.global('body', {margin: 0});

const App = () => (
  <div className={appStyles}>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Oxygen:400,700&amp;subset=latin-ext" rel="stylesheet" />
    </Head>
    <Editor />
  </div>
);

const appStyles = css({
  fontFamily: 'Oxygen, sans-serif',
});

export default App;
