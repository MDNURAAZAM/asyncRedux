import React, { useEffect } from "react";
import BookItem from "./BookItem";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";

const BookContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  return (
    <div className="lws-bookContainer">
      {/* <!-- Card 1 --> */}
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookContainer;
