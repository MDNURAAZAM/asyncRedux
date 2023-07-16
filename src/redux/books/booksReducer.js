import { ADDED, LOADED, UPDATED, DELETED } from "./actionTypes";
import initialState from "./initialState";

const nextItemId = (items) => {
  const maxId = items.reduce((maxId, item) => Math.max(maxId, item.id), -1);
  return maxId + 1;
};
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return [...action.payload];

    case ADDED:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];

    case UPDATED:
      const { bookId, updatedBook } = action.payload;
      return state.map((book) => {
        if (book.id === bookId) {
          return {
            ...book,
            ...updatedBook,
          };
        }
        return book;
      });

    case DELETED:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default booksReducer;
