import Immutable from 'immutable';
import {
  EDIT_NOTE,
  GET_LOCAL_STATE,
} from './actionTypes';

const defaultState = new Immutable.Map({
  noteText: '',
});

export default (state = defaultState, action) => {
  state = Immutable.fromJS(state);

  if (action.type === EDIT_NOTE) {
    state = state.set('noteText', action.data);
  }
  else if (action.type === GET_LOCAL_STATE) {
    state = state.mergeDeepWith((prev, next) => {
      return (next !== undefined && next !== null) ? next : prev;
    }, action.data);
  }

  return state;
};
