/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/bookSlice';

const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const newBook = {
    item_id: 'item4',
    title,
    author: '',
    category,
  };

  const submitForm = () => {
    dispatch(addBook(newBook));
    setTitle('');
  };
  return (
    <div className="book-form">
      <h3 className="add-book">Add New Book</h3>
      <input type="text" value={title} placeholder="Book Name" onChange={(e) => setTitle(e.target.value)} />
      <select name="cars" id="cars" onChange={(e) => setCategory(e.target.value)}>
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
    </div>
  );
};

export default AddForm;
