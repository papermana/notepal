import React from 'react';
import remark from 'remark';
import remarkHtml from 'remark-html';
import { connect } from 'react-redux'
import defaultWrapperStyles, {
  documentEditedWrapperStyles,
} from '../styles/editorWrapperStyles';
import editorStyles from '../styles/editorStyles';
import {
  editNote,
} from '../redux/store';

class Editor extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  onTextChange = (e) => {
    this.props.editNote(e.target.value);
    // remark()
    // .use(remarkHtml)
    // .process(e.target.value, (err, file) => {
    //   this.setState({
    //     text: String(file),
    //   });
    // });
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
      <div>
        {this.props.noteText}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  noteText: state ? state.get('noteText') : '',
});

const mapDispatchToProps = (dispatch) => ({
  editNote: (text) => dispatch(editNote(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);
