/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import BookList from './components/BookList';
import BooksContainer from './components/pages.js/BooksContainer';

function App() {
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
