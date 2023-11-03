const AddForm = () => (
  <div className="book-form">
    <h3 className="add-book">Add New Book</h3>
    <input type="text" placeholder="Book Name" />
    <select name="cars" id="cars">
      <option value="book1">Book 1</option>
      <option value="book2">Book 2</option>
    </select>
    <button className="add-button" type="button">Add Book</button>
  </div>

);
export default AddForm;
