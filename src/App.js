
import './App.css';
import Welcome from './Welcome';
import AddBook from './components/AddBook';
import AppBar from './components/AppBar';
import FetchBooks from './components/FetchBooks';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
     
      <Router>
        <AppBar/>
       
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/addBook' element={<AddBook/>}></Route>
          <Route path='/fetchBooks' element={<FetchBooks/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
