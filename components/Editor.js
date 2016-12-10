import {
  connect,
} from 'react-redux';
import {
  editNote,
} from '../redux/actions';
import Editor from './EditorUi';

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
