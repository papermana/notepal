import React from 'react';
import Button from './Button';
import Toolbar from './Toolbar';

const HelpToolbar = () => (
  <Toolbar>
    <Button linkTo="/" >
      ← Go back
    </Button>
  </Toolbar>
);

export default HelpToolbar;
