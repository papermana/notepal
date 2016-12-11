import React from 'react';
import styles from '../styles/toolbarStyles';

const Toolbar = (props) => (
  <div className={styles}>
    {props.children}
  </div>
);

export default Toolbar;
