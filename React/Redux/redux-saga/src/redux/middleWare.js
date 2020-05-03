import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const forbidden = ["fuck", "spam", "php"];

export const forbiddenWordsMiddleWare = ({ dispatch }) => {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((w) => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(showAlert("This is spam"));
        }
      }
      return next(action);
    };
  };
};
