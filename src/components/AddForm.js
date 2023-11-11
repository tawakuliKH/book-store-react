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
    if (title !== '') {
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
    }

    setTitle('');
    setAuthor('');
  };
  return (
    <form className="book-form" onSubmit={(e) => submitForm(e)}>
      <h3 className="add-book">Add New Book</h3>
      <div className="inputsContainer">
        <input type="text" value={title} placeholder="Book Name" className="book-title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" value={author} placeholder="Author" className="book-author" onChange={(e) => setAuthor(e.target.value)} required />
        <select name="book-category" id="book-category" className="book-category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="book1">Book Category 1</option>
          <option value="book2">Book Category 2</option>
        </select>
        <button
          className="add-button"
          type="button"
          onClick={submitForm}
        >
          Add Book
        </button>
      </div>
    </form>
  );
};

export default AddForm;
