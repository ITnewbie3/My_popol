import './App.css';
import Main from './main/Main';
import Header from './include/Header';
import { Route, Routes } from 'react-router-dom';
import Aboutme from './aboutme/Aboutme';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/aboutme' element={<Aboutme/>} />
      </Routes>
    </div>
  );
}

export default App;
