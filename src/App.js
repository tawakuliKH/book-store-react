import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksContainer from './components/pages.js/BooksContainer';

function App() {
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
