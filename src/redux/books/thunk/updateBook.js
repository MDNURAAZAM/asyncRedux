import { updated } from "../actions";

const updateBook = (bookId, updatedBook) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      body: JSON.stringify({ ...updatedBook }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    const book = await response.json();
    dispatch(updated(bookId, book));
  };
};

export default updateBook;
