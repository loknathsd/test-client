import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './pages/AddBook';
import BookList from './pages/BookList';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<AddBook/>}/>
        <Route path='/booklist' element={<BookList/>}/>
        <Route path='/edit/:id' element={<AddBook/>}/>
      </Routes>
    </div>
  );
}

export default App;
