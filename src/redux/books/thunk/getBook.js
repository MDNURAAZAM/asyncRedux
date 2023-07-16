const getBook = async (bookId) => {
  const response = await fetch(`http://localhost:9000/books/${bookId}`);
  return response.json();
};

export default getBook;
