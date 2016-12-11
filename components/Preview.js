import {
  connect,
} from 'react-redux';
import Preview from './PreviewUi';

const mapStateToProps = (state) => ({
  noteText: state ? state.get('noteText') : '',
});

export default connect(
  mapStateToProps,
)(Preview);
