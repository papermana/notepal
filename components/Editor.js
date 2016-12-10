import React from 'react';
import remark from 'remark';
import remarkHtml from 'remark-html';
import defaultWrapperStyles, {
  documentEditedWrapperStyles,
} from '../styles/editorWrapperStyles';
import editorStyles from '../styles/editorStyles';

class Editor extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  onTextChange = (e) => {
    remark()
    .use(remarkHtml)
    .process(e.target.value, (err, file) => {
      this.setState({
        text: String(file),
      });
    });
  };

  getWrapperStyles = () => {
    if (this.state.text === '' || this.state.text === '\n') {
      return defaultWrapperStyles;
    }
    else {
      return documentEditedWrapperStyles;
    }
  }

  render = () => (
    <div className={this.getWrapperStyles()} >
      <textarea className={editorStyles}
        autoFocus
        onChange={this.onTextChange} />
    </div>
  );
}

export default Editor;
