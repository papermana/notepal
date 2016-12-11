import React from 'react';
import remark from 'remark';
import remarkReact from 'remark-react';
import styles from '../styles/previewStyles';

const remarkInstance = remark().use(remarkReact);

class Preview extends React.PureComponent {
  static propTypes = {
    noteText: React.PropTypes.string.isRequired,
  };

  render = () => (
    <div className={styles}>
      {remarkInstance.process(this.props.noteText).contents}
    </div>
  );
}

export default Preview;
