import Immutable from 'immutable';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

const defaultState = Immutable.fromJS({
  noteText: '',
});

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'EDIT_NOTE': return state.set('noteText', action.data);
    default: return state;
  }
};

export const editNote = (text) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'EDIT_NOTE',
    data: text,
  }), 0);
};

export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, defaultState, applyMiddleware(thunkMiddleware))
  } else {
    if (!window.store) {
      window.store = createStore(reducer, defaultState, applyMiddleware(thunkMiddleware))
    }
    return window.store
  }
}
