import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

export default (reducer, initialState, isServer) => {
  const getStore = () => createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );

  if (isServer && typeof window === 'undefined') {
    return getStore();
  }
  else {
    if (!window.store) {
      window.store = getStore();
    }

    return window.store;
  }
};
