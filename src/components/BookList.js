import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../redux/books/actions';

const BookList = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleRemove = () => {
    dispatch(removeBook({ URL, id }))
      .then(() => {
        dispatch(getBooks(URL));
      });
  };
  return (
    <div className="book-list" id={id} key={id}>
      <div className="book">
        <div className="bookTitle">
          <div className="action"> Action</div>
          <h3 className="title">{title}</h3>
          <h4 className="author">{author}</h4>
          <h4 className="category">{category}</h4>
          <ul className="actions">
            <li>
              <button type="button">Comments</button>
            </li>
            <div className="verticalDivider" />
            <li>
              <button type="button" onClick={() => handleRemove(id)}>Remove</button>
            </li>
            <div className="verticalDivider" />
            <li>
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className="progressContainer">

          <div className="progressInfo">

            <div className="circularProgressContainer">
              <div className="circularProgress" />
            </div>
            <div className="progressNumber">
              <h4>64%</h4>
              <p>Completed</p>
            </div>

          </div>

          <div className="progressDivider" />
          <div className="chapterInfo">
            <div className="chapterCurrent">
              <h4>CURRENT CHAPTER</h4>
              <p>CHAPTER 1</p>
            </div>
            <div>
              <button type="button" className="update">UPDATE PROGRESS</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BookList;
