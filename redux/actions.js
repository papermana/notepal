import {
  EDIT_NOTE,
} from './actionTypes';

export const editNote = (text) => ({
  type: EDIT_NOTE,
  data: text,
});
