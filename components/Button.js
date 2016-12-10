import React from 'react';
import Link from 'next/link';
import styles from '../styles/buttonStyles';

const Button = (props) => {
  const buttonInner = (
    <button className={styles}
      disabled={props.disabled} >
      {props.children}
    </button>
  );

  if (props.linkTo) {
    return (
      <Link href={props.linkTo}>
        {buttonInner}
      </Link>
    );
  }
  else {
    return buttonInner;
  }
};

Button.propTypes = {
  disabled: React.PropTypes.bool,
  linkTo: React.PropTypes.string,
};

export default Button;
