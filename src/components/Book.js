const Book = () => (
  <div className="book-list">
    <div className="book">
      <div className="bookTitle">
        <div className="action"> Action</div>
        <h3 className="title">Book 1</h3>
        <h4 className="author">John John</h4>
        <div className="comments-action">
          <button type="button" className="comment">Comment</button>
          <button type="button" className="remove">Remove</button>
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
export default Book;
