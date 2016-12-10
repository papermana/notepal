import {
  connect,
} from 'react-redux';
import Toolbar from './ToolbarUi';

const mapStateToProps = (state) => ({
  noteText: state ? state.get('noteText') : '',
});

export default connect(
  mapStateToProps,
)(Toolbar);
