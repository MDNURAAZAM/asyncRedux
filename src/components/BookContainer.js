import React, { useEffect } from "react";
import BookItem from "./BookItem";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";

const BookContainer = ({ clickedButton, searchValue, setUpdateId }) => {
  let books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  if (clickedButton === "Featured") {
    books = books.filter((book) => book.featured);
  }

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <div className="lws-bookContainer">
      {/* <!-- Card 1 --> */}
      {books
        .filter((book) =>
          book.name?.toLowerCase().includes(searchValue?.toLowerCase())
        )
        .map((book) => (
          <BookItem key={book.id} book={book} setUpdateId={setUpdateId} />
        ))}
    </div>
  );
};

export default BookContainer;
