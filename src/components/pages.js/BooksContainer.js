// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import BookList from '../BookList';
import AddForm from '../AddForm';

const BooksContainer = () => {
  const { books } = useSelector((store) => store.book);
  return (
    <div className="booksContainer">
      {books.map((book) => (
        <BookList
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <AddForm />

    </div>
  );
};

export default BooksContainer;
