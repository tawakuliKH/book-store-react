import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => (
  <div className="navbar">
    <div className="nav-links">
      <h3 className="book-CMS">Book Store</h3>
      <Link to="/" className="books">BOOKS</Link>
      <Link to="/Author" className="categories  ">CATEGORIES</Link>
    </div>
    <div className="iconButton">
      <PersonIcon />
    </div>
  </div>
);
export default Navbar;
