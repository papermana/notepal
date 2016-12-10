import remark from 'remark';
import remarkHtml from 'remark-html';
import {
  EDIT_NOTE,
} from './actionTypes';

export const editNote = (text) => (dispatch) => {
  remark()
  .use(remarkHtml)
  .process(text, (err, file) => {
    dispatch({
      type: EDIT_NOTE,
      data: String(file),
    });
  });
};
