import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook, getBooks } from '../redux/books/actions';

const AddForm = () => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Book 1');
  const [randomId, setRandomId] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    setRandomId(`Book- ${Math.random()}`);
    dispatch(addBook({
      URL,
      newBook: {
        item_id: randomId,
        title,
        author,
        category,
      },
    })).then(() => {
      dispatch(getBooks(URL));
    });

    setTitle('');
    setAuthor('');
  };
  return (
    <form className="book-form" onSubmit={(e) => submitForm(e)}>
      <h3 className="add-book">Add New Book</h3>
      <input type="text" value={title} placeholder="Book Name" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
      <select name="cars" id="cars" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="book1">Book 1</option>
        <option value="book2">Book 2</option>
      </select>
      <button
        className="add-button"
        type="button"
        onClick={submitForm}
      >
        Add Book
      </button>
    </form>
  );
};

export default AddForm;
