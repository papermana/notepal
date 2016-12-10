import React from 'react';
import styles from '../styles/buttonStyles';

const Button = (props) => (
  <button className={styles} {...props} >
    {props.children}
  </button>
);

export default Button;
