import {
  connect,
} from 'react-redux';
import IndexToolbar from './IndexToolbarUi';

const mapStateToProps = (state) => ({
  noteText: state ? state.get('noteText') : '',
});

export default connect(
  mapStateToProps,
)(IndexToolbar);
