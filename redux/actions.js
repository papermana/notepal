import {
  EDIT_NOTE,
  GET_LOCAL_STATE,
} from './actionTypes';

export const editNote = (text) => (dispatch) => {
  window.localStorage.setItem('recentNote', text);

  dispatch({
    type: EDIT_NOTE,
    data: text,
  });
};

export const getLocalState = () => ({
  type: GET_LOCAL_STATE,
  data: {
    noteText: window.localStorage.getItem('recentNote'),
  },
});
