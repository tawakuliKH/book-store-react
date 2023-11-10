import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const BookList = ({
  // eslint-disable-next-line react/prop-types
  id, title, author,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book-list" id={id}>
      <div className="book">
        <div className="bookTitle">
          <div className="action"> Action</div>
          <h3 className="title">{title}</h3>
          <h4 className="author">{author}</h4>
          <div className="comments-action">
            <button type="button" className="comment">Comment</button>
            <button type="button" className="remove" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
            <button type="button" className="edit">Edit</button>
          </div>
        </div>
        <div className="percentage"> 64% </div>
        <div className="book-info">
          <div className="chapter">Chapter</div>
          <div className="book-chapter">Chapter 17</div>
          <button type="button" className="update">Update Progress</button>
        </div>
      </div>
    </div>
  );
};
export default BookList;
