import React from 'react';
import Button from './Button';
import Toolbar from './Toolbar';

class IndexToolbar extends React.PureComponent {
  static propTypes = {
    noteText: React.PropTypes.string.isRequired,
  };

  isRenderingDisabled = () => (
    this.props.noteText === '' || this.props.noteText === '\n'
  );

  render = () => (
    <Toolbar>
      <Button disabled={this.isRenderingDisabled()}
        linkTo="/preview" >
        Preview
      </Button>
      <Button>
        ?
      </Button>
    </Toolbar>
  );
}

export default IndexToolbar;
