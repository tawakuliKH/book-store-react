import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="title">
      <h3>Book Store</h3>
    </div>
    <div className="nav-links">
      <Link to="/" className="nav-item nav-links-item">Books</Link>
      <Link to="/Author" className="nav-item nav-links-item">Author</Link>
    </div>
  </div>
);
export default Navbar;
