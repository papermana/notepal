import React from 'react';
import remark from 'remark';
import remarkHtml from 'remark-html';
import styles from '../styles/previewStyles';

class Preview extends React.PureComponent {
  static propTypes = {
    noteText: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      formattedText: '',
    };
  }

  componentDidMount = () => {
    this.getFormattedText();
  }

  componentWillUpdate = () => {
    this.getFormattedText();
  }

  getFormattedText = () => {
    remark()
    .use(remarkHtml)
    .process(this.props.noteText, (err, file) => {
      this.setState({
        formattedText: String(file),
      });
    });
  };

  render = () => (
    <div className={styles}
      dangerouslySetInnerHTML={{__html: this.state.formattedText}} />
  );
}

export default Preview;
