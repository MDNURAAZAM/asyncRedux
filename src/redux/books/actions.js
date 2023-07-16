import { ADDED, LOADED, UPDATED, DELETED } from "./actionTypes";

export const added = (book) => {
  return {
    type: ADDED,
    payload: book,
  };
};
export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};
export const updated = (bookId, updatedBook) => {
  return {
    type: UPDATED,
    payload: { bookId, updatedBook },
  };
};

export const deleted = (bookId) => {
  return {
    type: DELETED,
    payload: bookId,
  };
};
