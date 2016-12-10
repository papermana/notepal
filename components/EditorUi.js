import React from 'react';
import defaultWrapperStyles, {
  documentEditedWrapperStyles,
} from '../styles/editorWrapperStyles';
import editorStyles from '../styles/editorStyles';


class Editor extends React.PureComponent {
  static propTypes = {
    editNote: React.PropTypes.func.isRequired,
    noteText: React.PropTypes.string.isRequired,
  };

  onTextChange = (e) => this.props.editNote(e.target.value);

  getWrapperStyles = () => {
    if (this.props.noteText === '' || this.props.noteText === '\n') {
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
      <div>
        {this.props.noteText}
      </div>
    </div>
  );
}

export default Editor;
