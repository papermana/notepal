import Immutable from 'immutable';
import {
  EDIT_NOTE,
} from './actionTypes';

const defaultState = new Immutable.Map({
  noteText: '',
});

export default (state = defaultState, action) => {
  state = Immutable.fromJS(state);

  if (action.type === EDIT_NOTE) {
    state = state.set('noteText', action.data);
  }

  return state;
};
