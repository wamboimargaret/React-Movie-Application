// import logo from './logo.svg';
import './App.css';
import GetMovies from './Components/get-movies';
import Search from './Components/get-movies/Navbar';
// import { BrowserRouter,Routes } from 'react-router-dom';

function App() {
  return (
    <div className='main'>
          <Search/>
          <GetMovies/>
          
  
    </div>
  );
}
export default App;
