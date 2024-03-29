import React from 'react';
import Button from './Button';
import Toolbar from './Toolbar';

const PreviewToolbar = () => (
  <Toolbar>
    <Button linkTo="/" >
      ← Go back
    </Button>
  </Toolbar>
);

export default PreviewToolbar;
