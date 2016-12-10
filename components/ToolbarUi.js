import React from 'react';
import Button from './Button';
import styles from '../styles/toolbarStyles';

class Toolbar extends React.PureComponent {
  static propTypes = {
    noteText: React.PropTypes.string.isRequired,
  };

  isRenderingDisabled = () => (
    this.props.noteText === '' || this.props.noteText === '\n'
  );

  render = () => (
    <div className={styles}>
      <Button disabled={this.isRenderingDisabled()} >
        Preview
      </Button>
      <Button>
        ?
      </Button>
    </div>
  );
}

export default Toolbar;
