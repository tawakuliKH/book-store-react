import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => (
  <div className="navbar">
    <div className="nav-links">
      <h3 className="book-CMS">Book Store</h3>
      <Link to="/" className="books">BOOKS</Link>
      <Link to="/Author" className="categories  ">CATEGORIES</Link>
    </div>
    <button type="button" className="iconButton">
      <PersonIcon />
    </button>
  </div>
);
export default Navbar;
