import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookList from '../BookList';
import AddForm from '../AddForm';
import { getBooks } from '../../redux/books/actions';

const BooksContainer = () => {
  const books = useSelector((state) => state.book.books);
  const isLoading = useSelector((state) => state.book.isLoading);
  const isSuccess = useSelector((state) => state.book.isSuccess);
  const errorMessage = useSelector((state) => state.book.errorMessage);
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  useEffect(() => {
    dispatch(getBooks(URL));
  }, [dispatch]);

  const bookList = isSuccess && Object.keys(books).map((key) => (
    books[key].map((book) => (
      <BookList
        key={key}
        id={key}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ))
  ));
  const error = !isSuccess && <p>{errorMessage}</p>;

  return (
    <>

      {isLoading ? <p>Loading...</p> : null}

      {bookList || error}
      <div className="bookContainer">
        <div className="line" />
        <AddForm />
      </div>

    </>
  );
};

export default BooksContainer;
